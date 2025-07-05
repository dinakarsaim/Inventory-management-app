const {Pool} = require("pg");

const pool = new Pool ({
    host: "localhost",
    user: "dinakarsai",
    database: "games",
    port: 5432,
});

module.exports = pool;