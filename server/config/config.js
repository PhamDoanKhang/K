const mysql = require("mysql");
var conn = mysql.createConnection({
    host    : "localhost",
    user    : "root",
    password: "",
    database: "website",
    charset : "utf8_general_ci"
});
module.exports = conn;