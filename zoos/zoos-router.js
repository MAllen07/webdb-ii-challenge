const router = require("express").Router();
const knex = require("knex");

const config = {
  client: "sqlite3",
  connection: {
    filename: "./data/lambda.db3"
  },
  useNullAsDefault: true
};
const db = knex(config);

//POST

router.post("/", (req, res) => {
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
router.get("/", (req, res) => {
  db("zoos")
    .then(zoos => res.status(200).json(zoos))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
