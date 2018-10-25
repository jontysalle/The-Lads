const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World\n');
});

app.get('timmy', (req, res) => {
    res.send('Timoth\n');
});

app.listen(6000, function() {
    console.log("Server running");
});
console.log('Hello');