const express = require('express');

const PORT = process.env.PORT || 9001;

const server = express();

server.get('/', (req, res) => {
  res.send('Welcome to EPL Rest API');
});

server.listen(PORT, () => {
  console.log(`[server]: http://localhost:${PORT}`);
});
