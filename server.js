// server.js

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Enable CORS for all origins
app.use(cors());

// Serve the index.html file from the /index folder
app.use(express.static(path.join(__dirname, 'index')));

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running at http://172.233.124.12:${port}`);
});
