var mongoose = require("mongoose");
var validate = require("mongoose-validator"); // mongoose validator via validate.js

var titleValidator = [
    validate({
        validator: "isLength",
        arguments: [3, 50],
        message: "Title should be between {ARGS[0]} and {ARGS[1]} characters",
    }),
]

var priceValidator = [
    validate({
        validator: "matches",
        arguments: /^\d+\.\d{0,2}$/i,
        message: "Price must be a decimal, 2 decimal max (i.e. 4.99)"
    })
]

const ProductSchema = new mongoose.Schema({
    title: {
        required: [true, "Name is required"],
        type: String,
        validate: titleValidator,
    },
    price: {
        required: [true, "Price is required"],
        type: String,
        validate: priceValidator,
    },
    url: {
        required: [true, "URL is required"],
        type: String,
    }
}, { timestamps: true});
// automatically creates "createdAt" & "updatedAt" with ISODate value
// will auto update "updatedAt"

mongoose.model("Product", ProductSchema);