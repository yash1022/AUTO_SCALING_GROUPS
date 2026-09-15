const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (request, response) => {
  response.json({ message: 'Hello from the Express server' });
});

app.get('/health', (request, response) => {
  response.json({ status: 'ok' });
});

app.get('/api/items', (request, response) => {
  response.json({
    items: [
      { id: 1, name: 'example' },
      { id: 2, name: 'sample' }
    ]
  });
});

app.post('/api/echo', (request, response) => {
  response.status(201).json({ received: request.body });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

module.exports = app;