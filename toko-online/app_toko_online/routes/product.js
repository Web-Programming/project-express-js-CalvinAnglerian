var express = require('express');
var router = express.Router();

var controllerProduct = require('../controllers/controllerProduct');

/* GET product detail page. */
// router.get('/:id', function(req, res, next) {
//   const productId = parseInt(req.params.id); // Tangkap id dari URL (Parameter)
//   const product = products.find(p => p.id === productId); // Cari produk by id

router.get("/all", controllerProduct.all);
router.get("/",controllerProduct.index);
router.get('/:id', controllerProduct.productDetail);

//     if (!product) { // Jika produk tidak ditemukan
//         return res.status(404).send('Produk tidak ditemukan!');
//     }
//     res.render('produk-detail', 
//         {
//             title : product.name,
//             product : product,
//             searchQuery : '' // Supaya tidak error di layout
//         }       
//     );
// });

router.get('/:productId/review/:reviewId', function(req,res,next){
    const productId = req.params.productId;
    const reviewId = req.params.reviewId;
    res.render('review-detail',
        {
            title: `Ulasan ${reviewId} untuk produk ${productId}`,
            productId: productId,
            searchQuery: '',
            reviewId: reviewId
        });
});

module.exports = router;

