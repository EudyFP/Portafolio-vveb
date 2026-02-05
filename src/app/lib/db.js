const { createClient } = require('redis');
const Queue = require('bull');
require('dotenv').config();

console.log("XXXX", process.env.SECRET_DB_PORT)

const client = createClient({
    password: process.env.SECRET_DB_PASS,
    socket: {
        host: process.env.SECRET_DB_HOST,
        port: Number(process.env.SECRET_DB_PORT)
    }
});

console.log(client);
const emailQueue = new Queue('email', {
    redis: {
        host: process.env.SECRET_DB_HOST,
        port: Number(process.env.SECRET_DB_PORT),
        password: process.env.SECRET_DB_PASS
    }
})

client.on("error", (err) => console.log(err))
client.on("error", (err) => console.error("Redis Error:", err));
client.on("connect", () => console.log("Redis connected"));
client.on("reconnecting", () => console.log("Redis reconnecting"));


if (!client.isOpen) {
    client.connect()
}

module.exports = { client, emailQueue };