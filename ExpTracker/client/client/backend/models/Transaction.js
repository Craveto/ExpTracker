const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String },
  type: { type: String, enum: ["income", "expense"], required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
