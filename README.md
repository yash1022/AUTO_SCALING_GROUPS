# AUTO_SCALING_GROUPS

Simple Node.js and Express server with example API routes.

## Run

```bash
npm install
npm start
```

The server listens on `http://localhost:3000` by default. Set `PORT` to use a different port.

## Routes

- `GET /` - returns a welcome message
- `GET /health` - returns the server health status
- `GET /api/items` - returns example items
- `POST /api/echo` - returns the JSON request body

Run the route tests with:

```bash
npm test
```