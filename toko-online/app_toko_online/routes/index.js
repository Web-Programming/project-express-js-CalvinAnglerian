var express = require('express');
var router = express.Router();

var mainController = require(".../controller/main");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { 
//     title: 'Toko Online Sederhana', 
//     products: products,
//     searchQuery : ''
//   });
// });
router.get("/", mainController.index);

// Selesaikan fungsi route pencarian, pisahkan dengan controller

// Get search page --> routes baru untuk search

// router.get('/search', function(req, res, next){
//   const q = req.query.q ? req.query.q.toLowerCase():'';

//   let filteredProducts = products;

//   if (q) {
//     filteredProducts = products.filter( p => p.name.toLowerCase().includes(q)
//     );
//   }
  
//   res.render('index', {
//     title: 'Hasil Pencarian',
//     products: filteredProducts,
//     searchQuery: q // Lempar ke view supaya bisa tampilkan feedback
//   });
// });


module.exports = router;
