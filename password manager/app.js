const express = require('express');
const app = express();

app.use('/home', () => {
    console.log("middleware");
});

app.get('/home', (req, res) => {
    res.send("It's home");
});

app.listen(3000);
