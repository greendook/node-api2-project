const express = require('express');
const router = require('./routes/router');
const server = express();

server.use(express.json());

server.use('/api/posts', router);

server.get('/', (req, res) => {
  res.send(`Hello!`);
});

const port = process.env.PORT || 5500; // use the port if not grab 5000
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
