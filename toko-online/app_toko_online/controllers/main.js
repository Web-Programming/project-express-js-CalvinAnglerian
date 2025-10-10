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
    title: "",
    products: filteredProducts,
    searchQuery: q,
  });
};


module.exports = { index, search };

// Melakukan logika, model, dan lain lain di controller
