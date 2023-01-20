const mongoose = require("mongoose");
require("dotenv").config();
const uri = `mongodb+srv://${process.env.FEED_DBUSERNAME}:${process.env.FEED_DBPASSWORD}@${process.env.FEED_DBCLUSTER}.tlcopwh.mongodb.net/${process.env.FEED_DBNAME}?retryWrites=true&w=majority`;

module.exports = () => {
  mongoose
    .connect(uri)
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
