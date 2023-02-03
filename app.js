const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());

app.use((req, res) => {
    res.status(404).json({ message: 'Not found' })
})
// universal error handler
app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message })
})

module.exports = app;