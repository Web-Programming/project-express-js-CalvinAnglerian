const mongoose = require("mongoose");

// Buat skema user
const OrdersScema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // referensi ke model user
        required: true,
    },

    // Item-item dalam pesanan (Relasi ke Model Product)
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
            },
        },
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

const Order = mongoose.model('Order', OrdersScema);
module.exports = Order;