const { Schema, model } = require("mongoose");


const SocialSchema = new Schema({
        name: String,
        link: String,
       

    });


module.exports = model("Service", SocialSchema);