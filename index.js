const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

connectDB();

app.use(express.json());
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Merhaba Dünya!');
});

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} üzerinde çalışıyor`);
});
