const { product } = require('../models/products.model');

const createProduct = async (req, res) => {
    const { productName, productDescription, productPrice } = req.body;
    const productImage = req.file.path;

    const newProduct = new product({
        productName,
        productDescription,
        productPrice,
        productImage
    });

    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json(error);
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json(error);
    }
};

const getProductById = async (req, res) => {
    try {
        const productById = await product.findById(req.params.id);
        res.status(200).json(productById);
    } catch (error) {
        res.status(400).json(error);
    }
};

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await product.findByIdAndUpdate(req.params.id , req.body , {new: true});
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json(error);
    }
};

const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await product.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};