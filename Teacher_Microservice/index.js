const express = require('express');
const app = express();

app.post('/addassignment', (req, res) => {
    res.send('<html><body>INSIDE TEACHER AND ASSIGNMENT API..</body></html>')
});

//View API
app.get('/searchstudent', (req, res) => {
    res.send('<html><body>INSIDE TEACHER SEARCH STUDENT API..</body></html>')
});

//Update API
app.delete('/removeassignment', (req, res) => {
    res.send('<html><body>INSIDE TEACHER REMOVE ASSIGNMENT API..</body></html>')
});

// Start the express server.
app.listen(5001, () => {
    console.log('EXPRESS Server Started at Port No: 5001');
});