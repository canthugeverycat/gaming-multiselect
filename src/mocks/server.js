/**
 * A simple Express server for the elements API
 */
const { createServer } = require('http');
const express = require('express');
const { json } = require('express');
const cors = require('cors');

const getElementsRouter = require('./api/get-elements');

const app = express();
const server = createServer(app);

app.use(json());

app.use(
  cors({
    origin: '*',
    methods: ['GET'],
  })
);

app.use('/', getElementsRouter);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
