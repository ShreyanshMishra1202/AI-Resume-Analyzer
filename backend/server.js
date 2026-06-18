// Import the express package so we can create a server.
const express = require("express");

// Create an express application.
const app = express();

// Set the port number for the server.
// If a PORT value is available in the environment, use it.
// Otherwise, use 5000 as the default port.
const PORT = process.env.PORT || 5000;

// This middleware allows our server to read JSON data in requests.
// We will need this later when we send form data like registration and login details.
app.use(express.json());

// This is our first test route.
// When we open the root URL, the server will send a simple message.
app.get("/", (req, res) => {
  res.send("AI Resume Analyzer backend is running");
});

// Start the server and listen on the selected port.
// The callback function runs once the server starts successfully.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
