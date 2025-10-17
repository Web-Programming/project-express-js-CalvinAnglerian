var Users = require("../models/users");

const all = async (req, res) => {
    try {
        const usr = await Users.find({});
        res.status(200).json(
            {
                status: true,
                message: "Data user berhasil diambil",
                data: usr
            }
        );
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "Gagal memuat user"
        });
    }
};

// Create 
const create = async (req, res) => {
    try{
        //1. Ambil data dari request body
        const newUsers = new Users({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            isAdmin: req.body.isAdmin
        });

        //2. Simpan data ke mongodb melalui model Users
        const users = await newUsers.save();

        //3. Kirim respon sukses ke user
        res.status(200).json({
            status: true,
            message: "User berhasil disimpan.",
            data: users
        });
    }catch(err){
        if(err.name === 'ValidationError'){
            res.status(400).json({
                status: false,
                message: err.message
            });
        }else{
            res.status(500).json({
                status: false,
                message: 'Internal server error'
            });
        }
    }
};

// read one/ Detail user
const detailuser = async (req, res) => {
    try{
        //ambil id
        const usersId = req.params.id;
        //cari berdasarkan id
        const users = await Users.findbById(usersId);
        //kirim respon error jika produk tidak ditemukan
        if(!users) {
            return res.status(404).json({
                status: false,
                message: "User tidak ditemukan"
            });
        }
        //kirim respon sukses
        res.status(200).json({
            status: true,
            message: "Detail user berhasil diambil",
            data: users
        });
    }catch(err){
        res.status(500).json({
            status: false,
            message: "Gagal memuat detail user"
        });
    }
};

//update data
const update = async (req, res) => {
  try{
    const users = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true, //untuk mengembalikan dokumen yg telah diupdate
      runValidators: true //untuk menjalankan validasi schema saat update
    })

    if(!users){
      res.status(404).json({
        status:false, 
        message: "User tidak ditemukan"
      })
    }
    //kirim respon sukses
    res.status(200).json({
      status: true,
      message: "User berhasil diupdate",
      data: users
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
    const users = await Users.findByIdAndDelete(req.params.id);

    if(!product) { // kirim respon gagal
      res.status(404).json({
        status:false, message: "User tidak ditemukan",
      });
    }else{
      // Kirim respon sukses
      res.status(200).json({
        status: true, message: "User berhasil dihapus"
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

module.exports = { all, create, detailuser, update, remove }; 