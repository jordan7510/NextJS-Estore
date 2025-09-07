const Redis = require("ioredis");
let redisClient;

if (!global.redisClient) {
    global.redisClient = new Redis({
        port: 18778,
        host: process.env.REDIS_HOST,
        username: process.env.REDIS_USERNAME,
        password: process.env.REDIS_PASSWORD,
        db: 0, // Defaults to 0
        retryStrategy: (times) => Math.min(times * 50, 2000),
    })
};

redisClient = global.redisClient;
export default redisClient;

