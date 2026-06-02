const express = require('express');
const app = express();

app.post('/studentlogin', (req, res) => {
    res.send('<html><body>INSIDE STUDENT LOGIN API..</body></html>')
});

//View API
app.get('/viewassignment', (req, res) => {
    res.send('<html><body>INSIDE STUDENT VIEW ASSIGNMENT API..</body></html>')
});

//Update API
app.put('/studentupdateprofile', (req, res) => {
    res.send('<html><body>INSIDE STUDENT UPDATE PROFILE API..</body></html>')
});

// Start the express server.
app.listen(5000, () => {
    console.log('EXPRESS Server Started at Port No: 5000');
});