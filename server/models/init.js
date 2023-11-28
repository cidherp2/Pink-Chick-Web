const msql = require("mysql2/promise");

const createDb = async () => {
    if (process.env.DATABASE_URL) {
        return;
    }

    const conn = await msql.createConnection({
        user: "root",
        password: "Telecaster12",
        host: "localhost"
    });

    const created = await conn.execute("CREATE DATABASE IF NOT EXISTS pinkchicks_db");
    return created;
};

module.exports = { createDb };