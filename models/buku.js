const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Buku = sequelize.define('Buku', {
  id_buku: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  ISBN: {
    type: DataTypes.STRING, // Mengubah menjadi STRING untuk keseragaman
    allowNull: false,
    unique: true
  },
  judul: {
    type: DataTypes.STRING,
    allowNull: false
  },
  penulis: {
    type: DataTypes.STRING,
    allowNull: true
  },
  penerbit: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tahunTerbit: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ketersediaan: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  tableName: 'Buku' // Menyediakan nama tabel yang eksplisit
});

module.exports = Buku;
