const express = require('express');
const router = express.Router();
// Data anggota yang akan kita tampilkan
const anggota = [
 { id_anggota: 100, nama_anggota: 'kiara', alamat: 'hayam wuruk', nomor_telp:089878782936, email: 'kiara@gmail.com', password: 'ayobisa', statusKeanggotaan:'aktif', denda: 10000  },
 { id_anggota: 102, nama_anggota: 'mia', alamat: 'teratai', nomor_telp:087277626732, email: 'mia@gmail.com', password: 'bisa', statusKeanggotaan:'aktif', denda: 0  },
 { id_anggota: 98, nama_anggota: 'regina', alamat: 'nanas', nomor_telp:08672727378, email: 'regina2gmail.com', password: 'farida', statusKeanggotaan:'aktif', denda: 0  },
];
// Rute GET untuk mendapatkan daftar anggota
router.get('/', function(req, res, next) {
 res.json(anggota);
});

router.post('/', function(req, res, next) {
    const newAnggota = {
        id_anggota: anggota.length + 1,
        nama_anggota: req.body.judul,
        alamat: req.body.penulis,
        nomor_telp: req.body.penerbit,
        email: req.body.tahunTerbit,
        password: req.body.ketersediaan,
        statusKeanggotaan: req.body.ketersediaan,
        denda: req.body.ketersediaan
    };
    res.json(newAnggota);
});

module.exports = router;