const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  mongoose
    .connect(process.env.FEED_MONGODB_URI)
    .then(() => {
      console.log(
        "\x1b[32m---------------------------------------------------"
      );
      console.log(
        "\x1b[32m|   FEED APP CONNECTED TO DB SUCCESSFULLY         |"
      );
      console.log(
        "\x1b[32m---------------------------------------------------"
      );
    })
    .catch((err) => {
      console.error(
        "\x1b[31m---------------------------------------------------"
      );
      console.error(
        "\x1b[31m|    FEED APP IS UNABLE TO CONNECT TO DB          |"
      );
      console.error(
        "\x1b[31m---------------------------------------------------"
      );
    });
};
