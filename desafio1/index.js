const express = require('express');

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send(JSON.stringify("Eu sou Full Cycle"));
});

app.listen(8080);