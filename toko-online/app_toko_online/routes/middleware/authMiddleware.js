ecxports.adminOnly = (req, res, next) => {
    const isAdmin = req.body.isAdmin; // Contoh: { "isAdmin: true" }
    if (isAdmin === true) {
        console.log('Middleware: Akses Admin Diberikan.');
        next(); // Lanjutkan
    } else {
        // 403 Forbidden
        return res.status(403).json({
            succes: false,
            message: "Akses ditolak. Endpoint ini membutuhkan hak akses Admin."
        })
    }
}