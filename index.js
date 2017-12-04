// Entry point for node
const express = require('express');
const app = express();

const PORT = 3002;

app.use(express.static('client/public'));

app.listen(PORT, () => {
    console.log('Node listening on port:', PORT);
});