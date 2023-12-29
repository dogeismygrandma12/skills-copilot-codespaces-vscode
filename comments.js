const express = require('express');
// Create web server application
// TODO: Add code to create a web server using Express or another framework.
const app = express();

// TODO: Add code to configure routes and middleware

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Path: comments.js
const express = require('express');
const router = express.Router();