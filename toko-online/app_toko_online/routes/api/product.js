const express = require("express");
const router = express.Router();
const controllerProduct = require("../../controllers/controllerProduct");

//url create - POST (/api/produk)
router.post("/", controllerProduct.create);

//url read all - GET (/api/produk)
router.get("/", controllerProduct.all);

//url read one - detail - GET (/api/produk/:id)
router.get("/:id", controllerProduct.detailproduk);

//url update - PUT (/api/produk/:id)
router.put("/:id", controllerProduct.update);

//url delete - DELETE (/api/produk/:id)
router.delete("/:id", controllerProduct.remove);

module.exports = router;