// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let data = []; // Array to hold submitted data

// GET endpoint to retrieve data
app.get('/api/data', (req, res) => {
  res.json(data);
});

// POST endpoint to submit data
app.post('/api/data', (req, res) => {
  const newItem = { value: req.body.value };
  data.push(newItem); // Add new item to the array
  res.json(newItem); // Return the new item
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
