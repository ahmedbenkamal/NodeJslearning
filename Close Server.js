const express = require('express');
const app = express();
app.get('/ping', (request, response) => {
response.send('Hello');
});
app.close()