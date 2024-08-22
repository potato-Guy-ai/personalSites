const express = require('express');
const app = express();
const port = 80; // Specify your desired port

app.use(express.static('public')); // Serve static files from the 'public' directory

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // Serve the index.html file
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});