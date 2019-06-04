const server = require("./api/server");

const port = process.env.PORT || 3300;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));

//END-POINTS


//POST 
server.post("/", (req, res) => {
  const name = req.body;

  db("zoos")
    .insert(name)
    .then(input => {
      res.status(200).json(input);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//GET

server.get("/", (req, res) => {
  db("zoos")
    .then(zoos => res.status(200).json(zoos))
    .catch(err => res.status(500).json(err));
});


// GET (ID)
server.get("/:id", (req, res) => {
    db("zoos")
        .then(zoos => res.status(200).json(zoos))
        .catch(err => res.status(500).json(err));
});


//DELETE

//PUT