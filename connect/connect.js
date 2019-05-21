const knex = require("knex");
const connect = require("express").Router();

const config = {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
        filename: "/data/lambda.sqlite3"
    }
};

const db = knex(config);