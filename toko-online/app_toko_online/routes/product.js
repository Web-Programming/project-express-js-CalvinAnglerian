var express = require('express');
var router = express.Router();
var products = require('../../data/products.json');

/* GET product detail page. */
router.get('/:id', function(req, res, next) {
  const productId = parseInt(req.params.id); // Tangkap id dari URL (Parameter)
  const product = products.find(p => p.id === productId); // Cari produk by id

    if (!product) { // Jika produk tidak ditemukan
        return res.status(404).send('Produk tidak ditemukan!');
    }
    res.render('produk-detail', 
        {
            title : product.name,
            product : product,
            searchQuery : '' // Supaya tidak error di layout
        }       
    );
});

module.exports = router;

