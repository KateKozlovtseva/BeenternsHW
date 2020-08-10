const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/frame.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './frame.html'));
});

app.get('/script.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, './script.js'));
});

app.get('/style.css', (req, res) => {
    res.sendFile(path.resolve(__dirname, './style.css'));
});



app.get('/enot.png', (req, res) => {
    res.sendFile(path.resolve(__dirname, './enot.png'));
});

// app.get('/serviceavailable/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './serviceresponse.json'))
// });

// app.get('/getinfo/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './inforesponse.json'))
// });

// app.get('/getdescription/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './descriptionresponse.json'))
// });

// app.post('/request/', (req, res) => {
//     setTimeout(() => {
//         res.sendFile(path.resolve(__dirname, './response.json'))
//     }, 10000);
// });

app.listen(4040, () => console.log('App listening on port 4040'));
