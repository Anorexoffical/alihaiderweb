const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  orderID: String,
  email: String,
  address: String,
  postalCode: String,
  phoneNO: String,
  country: String,
  totalAmount: Number,
  payFastTax: String,
  totalAmountAfterTax: String,
  pf_payment_id: String,
  items: [
    {
      productID: mongoose.Schema.Types.ObjectId, 
      title: String,
      price: Number,
      quantity: Number,
      subTotal: Number,
    },
  ],
  deliveryStatus: {
    type: String,
    enum: ["Pending", "Delivered"],
    default: "Pending",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", OrderSchema);

