const express = require("express");
const router = express.Router();
const orders = require("../../controllers/orderController");
const adminOnly = require("../middleware/authMiddleware");

// @route POST /api/orders
// @desc Membuat Pesanan Baru
router.post("/", auth.adminOnly, orders.create);