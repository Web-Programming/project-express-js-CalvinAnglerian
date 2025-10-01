var products = require("../../data/products.json");

const index = (req, res) => {
  res.render("index", {
    title: "Toko Online Sederhana",
    products: products,
    searchQuery: "",
  });
};

const search = (req, res) => {
  const q = req.query.q ? req.query.q.toLowerCase() : "";

  let filteredProducts = products;

  if (q) {
    filteredProducts = products.filter((p) =>
      p.name.toLocaleLowerCase().includes(q)
    );
  }

  res.render("index", {
    title: "Hasil Pencarian",
    products: filteredProducts,
    searchQuery: q,
  });
};

// const Ulasan = (req, res) => {
//   const productId = req.params.productId;
//   const reviewId = req.params.reviewId;
//   res.send("review-detail", {
//     title: `Ulasan ${reviewId} untuk produk ${productId}`,
//     productId: productId,
//     reviewId: reviewId,
//   });
// };

module.exports = { index, search };

// Melakukan logika, model, dan lain lain di controller
