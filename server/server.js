const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require('fs');
const BlogPostModel = require("./models/BlogPostModel");
const UserModels = require("./models/userModels");

const app = express();

// image url make 
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Serve the 'uploads' folder as a static directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Define your routes below this line


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Handles form-urlencoded data

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Use the dynamically created 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/icellmobile", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected")).catch(err => console.error("MongoDB connection error:", err));

// POST endpoint with file upload and blog 
app.post("/Blogpost", upload.single("blogImage"), (req, res) => {
  const { postDate, category, username, occupation, title, body } = req.body;
  const blogImage = req.file ? req.file.filename : null;

  BlogPostModel.create({
    postDate,
    category,
    username,
    occupation,
    title,
    body,
    blogImage,
  }).then(result => res.status(201).json(result)).catch(err => res.status(400).json(err));
});



const blogSchema = new mongoose.Schema({
  postDate: String,
  title: String,
  username: String,
  body: String,
});

const Blog = mongoose.model('Blog', blogSchema);

// Fetch paginated blogs with a limit of 6 per page
app.get("/Blogposts", async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default to page 1 if no page is provided
  const limit = parseInt(req.query.limit) || 6; // Limit to 6 blogs per page by default

  try {
    const blogs = await BlogPostModel.find()
      .sort({ postDate: -1 }) // Sort blogs in descending order by postDate
      .skip((page - 1) * limit) // Skip blogs based on the page
      .limit(limit); // Limit the number of results

    const totalBlogs = await BlogPostModel.countDocuments(); // Get the total number of blogs
    const totalPages = Math.ceil(totalBlogs / limit); // Calculate total pages

    res.json({
      blogs,
      page,
      totalPages,
      totalBlogs,
    });
  } catch (err) {
    console.error("Error fetching blogs:", err);
    res.status(500).send("Error fetching blogs");
  }
});

//featch all blog in the table 


app.get("/AllBlogs", async (req, res) => {
  try {
    const blogs = await BlogPostModel.find(); // Fetch all blogs
    res.status(200).json(blogs);
  } catch (err) {
    console.error("Error fetching all blogs:", err);
    res.status(500).send("Error fetching all blogs");
  }
});


// delete the blogs 

app.delete('/Blogpost/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // Use BlogPostModel instead of Blog
    const deletedBlog = await BlogPostModel.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).send("Blog not found");
    }
    res.status(200).send("Blog deleted successfully");
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).send("Error deleting blog");
  }
});





// Update a blog post
app.put("/Blogpost/:id", upload.single("blogImage"), async (req, res) => {
  const { id } = req.params;
  const { postDate, category, username, occupation, title, body } = req.body;
  const blogImage = req.file ? req.file.filename : null;

  try {
    const blogPost = await BlogPostModel.findById(id);
    if (!blogPost) {
      return res.status(404).send("Blog post not found");
    }

    blogPost.postDate = postDate;
    blogPost.category = category;
    blogPost.username = username;
    blogPost.occupation = occupation;
    blogPost.title = title;
    blogPost.body = body;
    if (blogImage) {
      blogPost.blogImage = blogImage;
    }

    await blogPost.save();
    res.status(200).json(blogPost);
  } catch (error) {
    console.error("Error updating blog post:", error);
    res.status(500).send("Error updating blog post");
  }
});



// Fetch a specific blog post by ID
app.get("/Blogpost/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const blogPost = await BlogPostModel.findById(id);
    if (!blogPost) {
      return res.status(404).send("Blog post not found");
    }
    res.status(200).json(blogPost); // Send the specific blog post as response
  } catch (error) {
    console.error("Error fetching blog post:", error);
    res.status(500).send("Error fetching blog post");
  }
});


// for login 


app.post("/user", async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  try {
    const user = await UserModels.findOne({ userName });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
  
});

//for paymnt method 
const crypto = require("crypto");

const generateSignature = (data, passPhrase = null) => {
  let pfOutput = "";
  for (let key in data) {
    if (data[key] !== "") {
      pfOutput += `${key}=${encodeURIComponent(data[key].trim()).replace(/%20/g, "+")}&`;
    }
  }

  let getString = pfOutput.slice(0, -1);
  if (passPhrase) {
    getString += `&passphrase=${encodeURIComponent(passPhrase.trim()).replace(/%20/g, "+")}`;
  }

  return crypto.createHash("md5").update(getString).digest("hex");
};

app.post("/payfast/initiate-payment", async (req, res) => {
  const { firstName, lastName, email, totalAmount, items, address, postalCode, phoneNO, selectedCountry } = req.body;

  const merchant_id = "10036171";
  const merchant_key = "731ry9o3bmz2d";
  const return_url = "https://e70d-118-107-131-17.ngrok-free.app/payfast/success";
  const cancel_url = "https://e70d-118-107-131-17.ngrok-free.app/payfast/cancel";
  const notify_url = "https://e70d-118-107-131-17.ngrok-free.app/payfast/notifyurl";

  const orderID = `${Date.now()}-${crypto.randomBytes(2).toString("hex")}`;

  const filteredItems = items.map(({ id, subtitle, discount, image, ...rest }) => rest);

  const paymentData = {
    merchant_id,
    merchant_key,
    return_url,
    cancel_url,
    notify_url,
    name_first: firstName,
    name_last: lastName,
    email_address: email,
    m_payment_id: orderID,
    amount: totalAmount,
    item_name: `OID-${orderID}`,

    custom_str1: JSON.stringify(filteredItems), 
    custom_str2: JSON.stringify({address}),
    // custom_str1: encodeURIComponent(JSON.stringify({filteredItems})), 
    // custom_str2: encodeURIComponent(JSON.stringify({address})),
    custom_str3: postalCode,  
    custom_str4: phoneNO,
    custom_str5: selectedCountry,

  };

  console.log(paymentData);

  const passPhrase = "";
  paymentData.signature = generateSignature(paymentData, passPhrase);

  // let paymentUrl = `https://www.payfast.co.za/eng/process?`;

  let paymentUrl = `https://sandbox.payfast.co.za/eng/process?`;
  Object.keys(paymentData).forEach((key) => {
    paymentUrl += `${key}=${encodeURIComponent(paymentData[key])}&`;
  });

  res.json({ paymentUrl });

});

const notifyRoutes = require("./payment/notifyurl");
app.use(notifyRoutes);



// Start server
app.listen(30001, () => {
  console.log("Server is running on port 30001");
});
