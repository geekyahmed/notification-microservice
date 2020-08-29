require("dotenv").config();

const db = {
    development: {
        uri: process.env.MONGODB_URi
    },
    production: {
        uri: process.env.MONGOATLAS_URi
    }
}

module.exports = db;