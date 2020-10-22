import express from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Fetch todos API');
});

app.listen(port, () => {
  console.log('Backend is ready!');
});