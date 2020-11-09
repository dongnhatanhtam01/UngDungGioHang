const express = require('express');
const app = express();
const data = require('./dataMockup.json');

app.get('/', (req, res) => {
    res.send('Hello! Welcome to my api');
});
app.get('/api/dataPhone', (req, res) => {
        res.send(data)
    })
    // PORT
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Listening on port ${port}...`) })