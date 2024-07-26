const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Anggota = sequelize.define('Anggota', {
  id_anggota: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nama_anggota: {
    type: DataTypes.STRING,
    allowNull: false
  },
  alamat: {
    type: DataTypes.STRING,
    allowNull: true
  },
  nomor_telp: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  statusKeanggotaan: {
    type: DataTypes.STRING,
    allowNull: false
  },
  denda: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  timestamps: true,
  tableName: 'Anggota' // Menyediakan nama tabel yang eksplisit
});

module.exports = Anggota;
