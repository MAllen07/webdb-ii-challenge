const express = require('express');
const helmet = require('helmet');

const server = express();
const db = knex(knexConfig.development);

server.use(express.json());
server.use(helmet());

// endpoints here


//POST
connect.post('/api/zoos', (req, res) => {
  const name = req.body;
  db('zoos')
    .insert(name)
    .then(ids => {
      db('zoos')
        .where({ id: })
        .then(zoo => {
          res.status(201).json(zoo);
        })
        .catch(err => res.status(500).json(err));
      
      // GET

connect.get('/api/zoos', (req, res) => {
  db("lambda")
    .then(records => res.status(200).json(records))
    .catch(err => res.status(500).json(err));
});

      
      // GET #2
connect.get('/api/zoos/:id', (req, res) => {
  const { id } = req.params;
  db("lambda")
    .where({ id: id })
    .first()
    .then(results => res.status(200).json(results))
    .catch(err => res.status(500).json(err));
});


   // DELETE    
 
      connect.delete('/api/zoos/:id', (req, res) => {
        const { id } = req.params;

        db("lambda")
          .where({ id })
          .del()
          .then(count => res.status(200).json(count))
          .catch(err => res.status(500).json(err));
      });
  
  
  //PUT

connect.put('/api/zoos/:id', (req, res) => {
  const { id } = req.params;
  const zoos = req.body;
  
  db("lambda")
    .where({ id })
    .update(zoos)
    .then(count => res.status(200).json(count))
    .catch(err => res.status(500).json(err));
});

;

module.exports = connect;


const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
