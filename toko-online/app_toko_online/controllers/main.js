var products = require('../../data/products.json');

const index = (req, res) => {
    res.render('index', {
      title: 'Toko Online Sederhana',
      products: products,
      searchQuery: ''
    });
};

const q = req.query.q ? req.query.q.toLowerCase():'';

let filteredProducts = products;

if (q) {
    filteredProducts = products.filter( p=>p.name.toLocaleLowerCase().includes(q)
    );
}

res.render( 'index', {
    title: 'Hasil Pencarian',
    products: filteredProducts,
    searchQuery: q
});

module.exports = { index };

// Melakukan logika, model, dan lain lain di controller