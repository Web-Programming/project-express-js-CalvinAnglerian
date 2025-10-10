var products = require("../../data/products.json");

var Product = require("../models/product");

const index = async (req, res) => {
  try {
    // gunakan find({})
    // untuk mengambil seluruh data dari collection
    const prod = await Product.find({}); //Untuk mengambil seluruh data dari collection
    res.render("index", {
      title: "Toko Online Sederhana - ini dari Mongo DB",
      product: prod,
    });
  } catch (err) {
    res.status(500).send("Gagal memuat produk");
  }
};

const productDetail = async (req, res) => {
  try {
    // const productId = parseInt(req.params.id); // Tangkap id dari URL (Parameter)
    // const product = products.find((p) => p.id === productId); // Cari produk by id

    const productId = parseInt(req.params.id);
    const product = await Product.findById(productId);

    if (!product) {
      // Jika produk tidak ditemukan
      return res.status(404).send("Produk tidak ditemukan!");
    }
    res.render("produk-detail", {
      title: product.name,
      product: product,
      searchQuery: " ",
    });
  } catch (err) {
    res.status(404).send("Gagal memuat detail produk");
  }
};

//Membuat restapi
const apiall = async (req, res) => {
  try {
    const prod = await Product.find({});
      res.status(200).json(
        {
          status: true,
          message: "Data produk berhasil dimbil",
          data: prod
        
      });
  } catch (err) {
    res.status(500).json({
      status : false,
      message: "Gagal memuat produk"
    });
  }
};

module.exports = { index, productDetail };
