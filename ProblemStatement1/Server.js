const express = require('express');
const app = express();
const cors = require('cors'); 
const PORT = 2025;

app.use(cors());

app.get('/api', (req, res) => {
    res.json({message:'Hello From Server'});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});