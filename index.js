const express = require('express');
const path = require('path');
const app = express();

// Serve file HTML/CSS/JS static
app.use(express.static(__dirname));

// Route utama - kirim index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Untuk development lokal
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
  });
}

// WAJIB: Export app untuk Vercel
module.exports = app;