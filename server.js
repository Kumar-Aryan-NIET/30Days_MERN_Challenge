const Express = require('express');
const app = Express();
const connectDB = require('./config/db');
const port = 3000;

connectDB();

app.get('/', (req, res) => res.send('API Running'));

app.listen(port, () => console.log(`Server started on port ${port}`));