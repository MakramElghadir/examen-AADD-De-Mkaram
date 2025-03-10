// server.js

const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');

const app = express();
const httpPort = 3000;  // HTTP Port
const httpsPort = 3001; // HTTPS Port

// Set up SSL options for HTTPS
const sslOptions = {
  key: fs.readFileSync('./private.key'),  // Path to your private key
  cert: fs.readFileSync('./certificate.crt')  // Path to your self-signed certificate
};

// Serve the index.html file from the /index folder
app.use(express.static(path.join(__dirname, 'index')));

// Start the HTTP server (for http://172.233.124.12:3000)
http.createServer(app).listen(httpPort, '0.0.0.0', () => {
  console.log(`HTTP Server is running at http://172.233.124.12:${httpPort}`);
});

// Start the HTTPS server (for https://172.233.124.12:3001)
https.createServer(sslOptions, app).listen(httpsPort, '0.0.0.0', () => {
  console.log(`HTTPS Server is running at https://172.233.124.12:${httpsPort}`);
});
