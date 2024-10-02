const express = require('express');
const path = require('path');
const minimist = require('minimist');

// Parse command line arguments to get the port number
const args = minimist(process.argv.slice(2));
const port = args.port || 5000; // Default port is 3000 if no port argument is provided

const app = express();

// Serve home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

// Serve project page
app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'project.html'));
});

// Serve registration page
app.get('/registration', (req, res) => {
  res.sendFile(path.join(__dirname, 'registration.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
