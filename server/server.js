const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");

const BlogPostModel = require("./models/BlogPostModel");
const UserModels = require("./models/userModels");
const notifyRoutes = require("./payment/notifyurl");

const Order = require("./models/orderModel");


const app = express();
const PORT = 30001;
const uploadDir = path.join(__dirname, "uploads");

// Ensure upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Middleware
app.use(cors({
  origin: ["https://icellmobile.co.za","http://localhost:3000", "http://localhost:5173"], // Allow only your production domain
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(uploadDir));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, `${Date.now()}${path.extname(file.originalname)}`),
});
const upload = multer({ storage });

// Database Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/icellmobile", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Blog Routes
app.post("/Blogpost", upload.single("blogImage"), async (req, res) => {
  try {
    const newBlog = await BlogPostModel.create({ ...req.body, blogImage: req.file?.filename || null });
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ error: "Error creating blog post", details: err });
  }
});

app.get("/Blogposts", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const blogs = await BlogPostModel.find().sort({ postDate: -1 }).skip((page - 1) * limit).limit(limit);
    const totalBlogs = await BlogPostModel.countDocuments();
    res.json({ blogs, page, totalPages: Math.ceil(totalBlogs / limit), totalBlogs });
  } catch (err) {
    res.status(500).json({ error: "Error fetching blogs" });
  }
});

app.get("/AllBlogs", async (req, res) => {
  try {
    res.status(200).json(await BlogPostModel.find());
  } catch (err) {
    res.status(500).json({ error: "Error fetching all blogs" });
  }
});

app.delete("/Blogpost/:id", async (req, res) => {
  try {
    const deletedBlog = await BlogPostModel.findByIdAndDelete(req.params.id);
    res.status(deletedBlog ? 200 : 404).json({ message: deletedBlog ? "Blog deleted" : "Blog not found" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting blog" });
  }
});

app.put("/Blogpost/:id", upload.single("blogImage"), async (req, res) => {
  try {
    const updatedBlog = await BlogPostModel.findByIdAndUpdate(req.params.id, { ...req.body, blogImage: req.file?.filename }, { new: true });
    res.status(updatedBlog ? 200 : 404).json(updatedBlog || { message: "Blog not found" });
  } catch (err) {
    res.status(500).json({ error: "Error updating blog" });
  }
});

app.get("/Blogpost/:id", async (req, res) => {
  try {
    const blogPost = await BlogPostModel.findById(req.params.id);
    res.status(blogPost ? 200 : 404).json(blogPost || { message: "Blog post not found" });
  } catch (err) {
    res.status(500).json({ error: "Error fetching blog post" });
  }
});

// User Authentication
app.post("/user", async (req, res) => {
  try {
    const user = await UserModels.findOne({ userName: req.body.userName });
    res.status(user && user.password === req.body.password ? 200 : 401).json({ message: user ? "Login successful" : "Invalid username or password" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// PayFast Payment Integration
const generateSignature = (data, passPhrase = "") => {
  const getString = Object.keys(data)
    .filter(key => data[key])
    .map(key => `${key}=${encodeURIComponent(data[key].trim()).replace(/%20/g, "+")}`)
    .join("&") + (passPhrase ? `&passphrase=${encodeURIComponent(passPhrase.trim()).replace(/%20/g, "+")}` : "");
  return crypto.createHash("md5").update(getString).digest("hex");
};

app.post("/payfast/initiate-payment", async (req, res) => {
  try {
    const { firstName, lastName, email, totalAmount, items, address, postalCode, phoneNO, selectedCountry } = req.body;
    const orderID = `${Date.now()}-${crypto.randomBytes(2).toString("hex")}`;
    const merchant_id = "26879017";
    const merchant_key = "l6ylebkxwezf5";
    //for sandbox test
    // const merchant_id = "10036171";
    // const merchant_key = "731ry9o3bmz2d";
    const return_url = "https://icellmobile.co.za/payfast/success";
    const cancel_url = "https://icellmobile.co.za/payfast/cancel";
    const notify_url = "https://icellmobile.co.za/payfast/notifyurl";
    // const notify_url = "https://3a31-103-137-24-132.ngrok-free.app/payfast/notifyurl";

    //https://3a31-103-137-24-132.ngrok-free.app
    
    const paymentData = {
      merchant_id, merchant_key, return_url, cancel_url, notify_url,
      name_first: firstName, name_last: lastName, email_address: email,
      m_payment_id: orderID, amount: totalAmount, item_name: `OID-${orderID}`,
      custom_str1: JSON.stringify(items.map(({ id, subtitle, discount, image, ...rest }) => rest)),
      custom_str2: JSON.stringify({ address }),
      custom_str3: postalCode, custom_str4: phoneNO, custom_str5: selectedCountry,
    };
    paymentData.signature = generateSignature(paymentData);
    //for sandbox testing  	https://sandbox.payfast.co.za/eng/process 
    // res.json({ paymentUrl: `https://sandbox.payfast.co.za/eng/process?${Object.keys(paymentData).map(key => `${key}=${encodeURIComponent(paymentData[key])}`).join("&")}` });
    res.json({ paymentUrl: `https://www.payfast.co.za/eng/process?${Object.keys(paymentData).map(key => `${key}=${encodeURIComponent(paymentData[key])}`).join("&")}` });

  } catch (err) {
    res.status(500).json({ error: "Error initiating payment" });
  }
});

app.use(notifyRoutes);

//fetch order data
app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: "Error fetching orders" });
  }
});

//update the deliverystatus
app.put("/orderstatusupdate/:id/deliver", async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { deliveryStatus: "Delivered" },
      { new: true }
    );
    res.status(200).json(updatedOrder);
    console.log("updated status")
  } catch (err) {
    res.status(500).json({ error: "Failed to update delivery status" });
  }
});

//for fromdate and todate functionality
app.get("/orders/filterbydate", async (req, res) => {
  const { fromDate, toDate } = req.query;
    const from = new Date(fromDate);
    const to = new Date(toDate);
    to.setHours(23, 59, 59, 999);

  try {
    const orders = await Order.find({
      createdAt: {
        $gte: from,
        $lte: to,
      },
    });

    res.json(orders);
  } catch (err) {
    console.error("Error fetching filtered orders:", err);
    res.status(500).send("Server error");
  }
});


// Start the server (No SSL, since it will be handled by Nginx or a reverse proxy)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
