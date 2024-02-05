const express = require('express');
const app = express();
const cors = require('cors'); 
const connectDB = require('./config/db.js');
const PORT = 2025;

app.use(cors());
connectDB();

app.get('/api', (req, res) => {
    res.json({message:'Hello From Server'});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});