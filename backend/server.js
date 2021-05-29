const http = require('http');

const app = require('./app');

const PORT = process.env.PORT || 9001;

const server = http.createServer(app);

async function startServer() {
  server.listen(PORT, () => {
    console.log(`[server]: http://localhost:${PORT}`);
  });
}

startServer();
