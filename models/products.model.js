const mongoose = require('mongoose');

const product = mongoose.model('Product', new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    productDescription: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    productPrice: {
        type: Number,
        required: true,
        min: 0,
        max: 1000
    },
    productImage: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
}));

module.exports = {
    product
};

