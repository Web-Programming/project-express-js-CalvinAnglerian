var products = require("../../data/products.json");

const productDetail = (req, res) => {
  const productId = parseInt(req.params.id); // Tangkap id dari URL (Parameter)
  const product = products.find((p) => p.id === productId); // Cari produk by id

  if (!product) {
    // Jika produk tidak ditemukan
    return res.status(404).send("Produk tidak ditemukan!");
  } 

  res.render("produk-detail", 
    {
      title: product.name,
      product: product,
      searchQuery: " "
  });
};

module.exports = { productDetail };
