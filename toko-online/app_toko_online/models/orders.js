const mongoose = require("mongoose");
const Product = require("./product");

// Buat skema user
const OrdersScema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    orderItems: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product', //Referensi ke model Product
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                min: 1,
            },
            priceAtOrder: { // Harga produk saat order dibuat
                type: Number,
                required: true,
            }
        }
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        default: 'Pending',
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
});

const Orders = mongoose.model('orders', OrdersScema);

module.exports = Orders;