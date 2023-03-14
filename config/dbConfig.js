const mongoose = require("mongoose");

function db_connection() {
    const db_url = process.env.DB_URL;
    mongoose.connect(db_url);

    mongoose.connection.on("error", (err) => {
        console.log("Db connection error", err);
    })

    console.log("db connection success");
}

module.exports = db_connection