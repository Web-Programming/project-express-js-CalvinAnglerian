const mongoose = require("mongoose");

//buat skema Produk
const ProductSchema = new mongoose.Schema({
    //tidak perlu membuat properti id karena akan dibuat otomatis 
    //dengan nama_id
    name: {
        type : String,
        required : [true, "Nama produk harus diisi"],
        trim: true // menghilangkan spasi di awal dan diakhir
    },
    price: {
        type : Number,
        required : [true, "Harga produk harus diisi"],
        min: [1000, "Harga produk minimal 1000"] // Nilai minimum
        // max: [1000, "Harga produk minimal 1000"]
    },
    description: {
        type : String,
        required : false //Menandakan kolom wajib diisi atau tidak
    },
    stock : {
        type : Number,
        default : 0, // Memberikan nilai bawaan/default
    },
    createAt: {
        type : Date,
        default : Date.now,
    }
});

// Buat model dari Schema
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;