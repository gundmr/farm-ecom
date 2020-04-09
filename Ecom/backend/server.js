import express from 'express';
import data from './data';

const app = express();

// GET
app.get("/api/products", (req, res) => {
    res.send(data.products);
});

// express.js will start running
app.listen(5000, () => {console.log("Server started at http://localhost:5000")});