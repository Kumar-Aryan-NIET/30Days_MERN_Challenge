const express = require('express')
const app = express()
const port = 3000

// The app responds with “Hello World!” for requests to the root URL (/) or route.
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// For other routes it responds with 404 Not Found.
// otherwise you have to define particular route first to work.
// Execution of route is from top to bottom, so if you define a route at the bottom, it will execute at last.

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

// This app starts a server and listens on port 3000 for connections.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})