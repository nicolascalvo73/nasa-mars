require('dotenv').config();
const dbUser = process.env.MONGO_USER;
const dbPass = process.env.MONGO_PASS;

module.exports = {
    "services": {
        "nasa": {
            "basepath": "https://api.nasa.gov",
            "apod": "/planetary/apod",
            "mars": "/mars-photos/api/v1/rovers"
        }
    },
    database:{
            host:`mongodb+srv://${dbUser}:${dbPass}@cluster0.1ctmluw.mongodb.net/?retryWrites=true&w=majority`
        }
}