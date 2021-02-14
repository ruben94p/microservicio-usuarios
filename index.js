'use strict';

const express = require('express');
const uuid = require('uuid');

const state = [];

const PORT = 8080;

const app = express();

app.use(
    express.urlencoded({
      extended: true
    })
  );

app.use(express.json());

app.post('/', (req, res) => {
  state.push({
      ...req.body,
      id: uuid.v4()
  })
  res.send(state);
});

app.listen(PORT);
console.log(`Running on port ${PORT}`);