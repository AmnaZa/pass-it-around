const express = require('express');
const app = express();
const port = 3000;

// Define a route for the home page
app.get('/', (req, res) => {
  res.send(`
    <h1 style="font-size: 36px; color: #333;">99 Bottles of Beer on the Wall</h1>
    <a style="font-size: 36px; color: #333;"href="/98">Take one down, pass it around</a>
  `);
});

// Define a route that takes a parameter for the number of bottles
app.get('/:number_of_bottles', (req, res) => {
  const numberOfBottles = parseInt(req.params.number_of_bottles);
  if (numberOfBottles === 0) {
    res.send(`
      <h1style="font-size: 36px; color: #333;">No more bottles left</h1>
      <a style="font-size: 36px; color: #333;"href="/">Start over</a>
    `);
  } else {
    const nextBottleCount = numberOfBottles - 1;
    res.send(`
    <h1 style="font-size: 36px; color: #333;">${numberOfBottles} Bottles of Beer on the Wall</h1>
    <a style="font-size: 36px; color: #333;" href="/${nextBottleCount}">Take one down, pass it around</a>
      <br>
      <a style="font-size: 36px; color: #333;" href="/">Start over</a>
    `);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
