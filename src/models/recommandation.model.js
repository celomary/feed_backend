const { Schema, model } = require("mongoose");


const RecommandiationSchema = new Schema({
        description: String,
        client_name: String,
       

    });


module.exports = model("Recommandiation", RecommandiationSchema);