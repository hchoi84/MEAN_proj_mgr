const product = require("../controllers/products.js");

module.exports = app => {
    app.get("/products", (req, res) => { product.getProducts(req, res); })
    app.get("/products/:id", (req, res) => { product.getProduct(req, res); })
    app.post("/products", (req, res) => { product.create(req, res); })
    app.put("/products/:id", (req, res) => { product.edit(req, res); })
    app.delete("/products/:id", (req, res) => { product.delete(req, res); })
}