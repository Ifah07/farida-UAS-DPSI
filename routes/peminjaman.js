const express = require('express');
const router = express.Router();
const Peminjaman = require('../models/peminjaman'); // Impor model Peminjaman
const { authenticate, authorize } = require('../middleware/auth');

// Endpoint untuk menambahkan peminjaman baru
router.post('/', async (req, res, next) => {
    try {
    const { id_peminjaman, statusPeminjaman } = req.body;
    const newPeminjaman = await Peminjaman.create({ id_peminjaman,
   statusPeminjaman });
    res.status(201).json(newPeminjaman);
    } catch (err) {
    next(err);
    }
   });
   // Endpoint untuk menampilkan semua peminjaman
   router.get('/', async (req, res, next) => {
    try {
    const peminjaman = await Peminjaman.findAll();
    res.json(peminjaman);
    } catch (err) {
    next(err);
    }
   });
   // Endpoint untuk menampilkan peminjaman berdasarkan ID
   router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
    const peminjaman = await Peminjaman.findByPk(id);
    if (!peminjaman) {
        return res.status(404).json({ message: 'Peminjaman tidak ditemukan' });
    }

    res.json(peminjaman);
} catch (error) {
    next(error);
}
   });

// POST peminjaman baru
router.post('/', async (req, res, next) => {
    const { id_peminjaman, statusPeminjaman } = req.body; // Mendapatkan data peminjaman dari body request
    try {
      // Membuat data peminjaman baru di database
      const newPeminjaman = await Peminjaman.create({
        id_peminjaman,
        statusPeminjaman
      });
      // Mengirimkan data peminjaman baru dalam format JSON dengan status 201 (Created)
      res.status(201).json(newPeminjaman);
    } catch (error) {
      // Meneruskan error ke middleware error handler
      next(error);
    }
  });

   // Endpoint untuk memperbarui peminjaman berdasarkan ID
router.put('/:id', async (req, res, next) => {
    try {
    const { id_peminjaman, statusPeminjaman } = req.body;
    const peminjaman = await Peminjaman.findByPk(req.params.id);
    if (peminjaman) {
    peminjaman.id_peminjaman = id_peminjaman;
    peminjaman.statusPeminjaman = statusPeminjaman;
    await peminjaman.save();
    res.json(peminjaman);
    } else {
    res.status(404).json({ message: 'Peminjaman not found' });
    }
    } catch (err) {
    next(err);
    }
   });
   // Endpoint untuk menghapus peminjaman berdasarkan ID
   router.delete('/:id', async (req, res, next) => {
    try {
    const peminjaman = await Peminjaman.findByPk(req.params.id);
    if (peminjaman) {
    await peminjaman.destroy();
    res.json({ message: 'Peminjaman deleted' });
    } else {
    res.status(404).json({ message: 'Peminjaman not found' });
    }
    } catch (err) {
    next(err);
    }
   });

module.exports = router;