const express = require('express');
const app = express();

// Counter variable
let counter = 0;

// Route to get the current counter value
app.get('/', (req, res) => {
  res.json({ counter });
});

// Route to increment the counter by 1
app.post('/increment', (req, res) => {
  counter += 1;
  res.json({ counter });
});

// Route to decrement the counter by 1
app.post('/decrement', (req, res) => {
  counter -= 1;
  res.json({ counter });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
