const mongoose = require("mongoose");
const dbConnection = async() => {
  try {
    const URI = process.env.MONGODB_URI;
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Not Connected to MongoDB");
  }
};
module.exports = dbConnection;
