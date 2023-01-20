require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./src/config/db.config.js");

const app = express();

mongoose.set("strictQuery", true);
app.listen(process.env.FEED_PORT || 8000, () => {
  console.log("\x1b[32m---------------------------------------------------");
  console.log(
    `\x1b[32m|         FEED APP RUNNING ON PORT ${
      process.env.FEED_PORT || 8000
    }           |`
  );
  console.log("\x1b[32m---------------------------------------------------");
  connectDB();
});
