const express = require('express');
const path = require('path');
const app = express();

// Serve semua file static (index.html, css, js, gambar) dari root
app.use(express.static(__dirname));

// Route utama - kirim index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Fallback untuk route yang tidak ada
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Jalanin server lokal
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});

// WAJIB untuk Vercel
module.exports = app;