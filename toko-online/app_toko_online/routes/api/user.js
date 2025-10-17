const express = require("express");
const router = express.Router();
const user = require("../../controllers/user");

//url create - POST --> Membuat User baru (Registration).
router.post("/", user.create);

//url read all - GET --> Mengambil semua user (Hanya untuk Admin).
router.get("/", user.all);

//url read one - detail - GET --> Mengambil detail satu user berdasarkan ID.
router.get("/:id", user.detailuser);

//url update - PUT --> Memperbarui detail user.
router.put("/:id", user.update);

//url delete - DELETE --> Menghapus User
router.delete("/:id", user.remove);

module.exports = router;