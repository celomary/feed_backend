const { Schema, model } = require("mongoose");


const ServiceSchema = new Schema({
        service_title: String,
        services_provided: String,
        tools: String,
        fee_type: String,
        price: Number,
        duration: Number,

    });


module.exports = model("Service", ServiceSchema);