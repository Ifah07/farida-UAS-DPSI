const express = require('express');
const router = express.Router();
// Data buku yang akan kita tampilkan
const buku = [
 { ISBN: 1, judul: 'mariposa', penulis: 'tere liye', penerbit:'gramedia', tahunTerbit: 2017, ketersediaan: 12  },
 { ISBN: 2, judul: 'angelina', penulis: 'king fajar', penerbit:'kompas', tahunTerbit: 2017, ketersediaan: 12  },
 { ISBN: 3, judul: 'pahlawanku', penulis: 'nadya', penerbit:'gramedia', tahunTerbit: 2017, ketersediaan: 12  },
];
// Rute GET untuk mendapatkan daftar buku
router.get('/', function(req, res, next) {
 res.json(buku);
});

router.post('/', function(req, res, next) {
    const newBuku = {
        ISBN: buku.length + 1,
        judul: req.body.judul,
        penulis: req.body.penulis,
        penerbit: req.body.penerbit,
        tahunTerbit: req.body.tahunTerbit,
        ketersediaan: req.body.ketersediaan
        };
    res.json(newBuku);
});

module.exports = router;