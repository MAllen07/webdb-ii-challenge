const express = require("express");
const helmet = require("helmet");
const knexConfig = require("./knexfile");
const server = express();
const knex = require("knex");
const db = knex(knexConfig.development);

server.use(express.json());
server.use(helmet());

// endpoints here

//POST
server.post("/api/zoos", (req, res) => {
  const name = req.body;
  db("zoos")
    .insert(name)
    .then(ids => {
      res.status(201).json(zoo);
    })
    .catch(err => res.status(500).json(err));
});
// GET

server.get("/api/zoos", (req, res) => {
  db("zoos")
    .then(records => res.status(200).json(records))
    .catch(err => res.status(500).json(err));
});

// GET #2
server.get("/api/zoos/:id", (req, res) => {
  const { id } = req.params;
  db("zoos")
    .where({ id: id })
    .first()
    .then(results => res.status(200).json(results))
    .catch(err => res.status(500).json(err));
});

// DELETE

server.delete("/api/zoos/:id", (req, res) => {
  const { id } = req.params;

  db("zoos")
    .where({ id })
    .del()
    .then(count => res.status(200).json(count))
    .catch(err => res.status(500).json(err));
});

//PUT

server.put("/api/zoos/:id", (req, res) => {
  const { id } = req.params;
  const zoos = req.body;

  db("zoos")
    .where({ id })
    .update(zoos)
    .then(count => res.status(200).json(count))
    .catch(err => res.status(500).json(err));
});

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
