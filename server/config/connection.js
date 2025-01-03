const mongoose = require("mongoose");
require("dotenv").config();

const dbURI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/hoteltransylvania"; // Use the fallback if no URI is provided

mongoose
  .connect(dbURI, {
    // Removed deprecated options
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

module.exports = mongoose.connection;
