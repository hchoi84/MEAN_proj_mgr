const mongoose = require("mongoose");
const Product = mongoose.model("Product");
var moment = require("moment"); // formatting dates in ejs
var bcrypt = require("bcrypt");

module.exports = {
    create: (req, res) => {
        var product = new Product({
            title: req.body.title,
            price: req.body.price,
            url: req.body.url,
        });
        product.save(err => {
            if (err){
                console.log("CREATING FAILED!");
                let message = {"message": "error occured"};
                for (var key in err.errors){
                    message[key] = err.errors[key].message;
                }
                res.json(message);
            }else{
                console.log("CREATION SUCCESS!");
                res.json(product)
            }
        });
    },

    getProducts: (req, res) => {
        Product.find({}, (err, products) => {
            if (err){
                console.log("RETRIEVING FAILED!", err);
                res.json(products);
            }else{
                console.log("RETRIEVING SUCCESS!");
                res.json(products);
            }
        });
    },

    getProduct: (req, res) => {
        console.log("4"); 
        Product.findById(req.params.id, (err, product) => {
            if (err){
                console.log("RETRIEVING FAILED!", err);
                res.json(product);
            }else{
                console.log("RETRIEVING SUCCESS!");
                res.json(product);
            }
        });
    },

    edit: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, 
            {
                title: req.body.title,
                price: req.body.price,
                url: req.body.url,

            }, {runValidators: true},(err, author) =>{
            if (err){
                console.log("EDIT FAILED!");
                let message = {"message": "error occured"};
                for (var key in err.errors){
                    message[key] = err.errors[key].message;
                }
                res.json(message);
            }else{
                console.log("EDIT SUCCESS!");
                res.json(author);
            }
        });
    },

    delete: (req, res) =>{
        Product.findByIdAndDelete(req.params.id, (err, product) => {
            if (err){
                console.log("DELETE FAILED!");
                res.json(product);
            }else{
                res.json(product);
            }
        })
    },

}