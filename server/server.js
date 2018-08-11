const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.get('/bad', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo App 1.0'
    });
});

app.listen(3000, () => {
    console.log('Server listing on port 3000');
});

module.exports.app = app;