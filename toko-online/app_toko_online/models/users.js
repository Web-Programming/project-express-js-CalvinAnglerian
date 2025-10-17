const mongoose = require("mongoose");

// Buat skema user
const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username harus diisi"],
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email harus diisi"],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Harap isi alamat email yang valid',
        ],
    },
    password: {
        type: String,
        required: [true, "Password harus diisi"],
        minLength: [6, "Panjang password minimal 6 karakter."],
        select: false, // Penting: Jangan sertakan password saat query GET
    },
    address: {
        type: String,
        default: "Belum diisi",
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

const Users = mongoose.model('users', UsersSchema);

module.exports = Users;