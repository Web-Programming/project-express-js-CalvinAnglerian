var products = require("../../data/products.json");

var Product = require("../models/product");

const index = async (req, res) => {
  try {
    // gunakan find({})
    // untuk mengambil seluruh data dari collection
    const prod = await Product.find({}); //Untuk mengambil seluruh data dari collection
    res.render("index", {
      title: "Toko Online Sederhana - ini dari Mongo DB",
      products: prod,
      searchQuery: ""
    });
  } catch (err) {
    res.status(500).send("Gagal memuat produk");
  }
};

const productDetail = async (req, res) => {
  try {
    // const productId = parseInt(req.params.id); // Tangkap id dari URL (Parameter)
    // const product = products.find((p) => p.id === productId); // Cari produk by id

    const productId = (req.params.id);
    const product = await Product.findById(productId);

    if (!product) {
      // Jika produk tidak ditemukan
      return res.status(404).send("Produk tidak ditemukan!");
    }
    res.render("produk-detail", 
      {
        title: product.name,
        product: product,
        searchQuery: ""
      }
    );
  } catch (err) {
    res.status(404).send("Gagal memuat detail produk");
  }
};

// CRUD Controller
//Membuat restapi
const all = async (req, res) => {
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

//Create/insert Data
const create = async (req, res) => {
  try{
    //1. ambil data dari request body
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      stock: req.body.stock || 0
    });

    //2. simpan data ke mongodb melalui model Product
    const product = await newProduct.save();

    //3. kirim respon sukses ke user
    res.status(200).json({
      status: true,
      message: "Produk berhasil disimpan",
      data: product
    })
  }catch(err){
    if(err.name === 'ValidationError'){
      res.status(400).json({
        status: false,
        message: err.message
      })
    }else{
      res.status(500).json({
      status: false,
      message: 'Internal server error'
      });
    }
  }
};

//read one /detail product
const detailproduk = async (req, res) => {
  try{
    //ambil id
    const productId = req.params.id;
    //cari berdasarkan id
    const product = await Product.findById(productId);
    //kirim respon error jika produk tdk ditemukan
    if(!product) {
      return res.status(404).json({
        status: false,
        message: "Produk tidak ditemukan"
      });
    }
    //kirim respon sukses
    res.status(200).json({
      status: true,
      message: "Detail produk berhasil diambil",
      data: product
    });
  }catch (err){
    res.status(500).json({
      status: false,
      message: "Gagal memuat detail produk"
    });
  }
};

//update data
const update = async (req, res) => {
  try{
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true, //untuk mengembalikan dokumen yg telah diupdate
      runValidators: true //untuk menjalankan validasi schema saat update
    })

    if(!product){
      res.status(404).json({
        status:false, 
        message: "Produk tidak ditemukan"
      })
    }
    //kirim respon sukses
    res.status(200).json({
      status: true,
      message: "Produk berhasil diupdate",
      data: product
    });
  }catch(err){
    if(err.name === 'CastError'){
      res.status(400).json({
        status: false, 
        message: "Format ID tidak valid"
      });
    }else if(err.name === 'ValidationError'){
      res.status(400).json({
        status: false, 
        message: err.message
      });
    }else{
      res.status(500).json({
        status: false,
        message: 'Internal Server Error'
      });
    }
  }
};

//delete/remove/destroy data
const remove = async (req, res) => {
  try{
    // Hapus menggunakan method findByIdAndDelete
    const product = await Product.findByIdAndDelete(req.params.id);

    if(!product) { // kirim respon gagal
      res.status(404).json({
        status:false, message: "Produk tidak ditemukan",
      });
    }else{
      // Kirim respon sukses
      res.status(200).json({
        status: true, message: "Produk berhasil dihapus"
      });
    }

  }catch(err){
    if(err.name === 'CastError'){
      res.status(400).json({
        status: false, message: "Format ID tidak valid"
      });
    }else{
      res.status(500).json({
        status: false, message: 'Internal server error'
      });
    }
  }
};


module.exports = { index, productDetail, all, create, detailproduk, update, remove };
