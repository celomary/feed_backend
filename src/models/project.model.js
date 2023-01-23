const { Schema, model } = require("mongoose");


const ProjectSchema = new Schema({
        link: String,
        title: String,
        roles: String,
        tools: String,
        commany_name: String,
        year: Number,
        image_url: String,

    });


module.exports = model("Project", ProjectSchema);