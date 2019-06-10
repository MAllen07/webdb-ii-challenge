//Configure knex to connect to /data/lambda.sqlite3 using the sqlite3 module.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/lambda.sqlite3"
    }
  }
};
