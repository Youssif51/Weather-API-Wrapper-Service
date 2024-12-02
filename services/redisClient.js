const redis = require("redis");


const client = redis.createClient();


client.connect().then(() => {
  console.log("Connected to Redis!");
});


client.on("error", (err) => {
  console.error("Redis error:", err);
});

module.exports = client;
