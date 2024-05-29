const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Atur direktori 'vote.ly_fe' sebagai direktori statis
app.use(express.static(path.join(__dirname, '..', 'vote.ly_fe')));

// Route utama yang menyajikan 'index.html'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'vote.ly_fe', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
