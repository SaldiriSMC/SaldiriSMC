const redis = require('redis');
const { Token } = require('../models/v2/index');
// Connect to the Redis server
const redisHost = 'localhost';
const redisPort = 6379;
let redisClient = redis.createClient(redisPort, redisHost);
(async () => {
  redisClient = redis.createClient();

  redisClient.on('error', (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();
// Function to add a task to the Redis queue
async function addTaskToRedisCache(data) {
  // const token = await Token.findOne({ where: { token: data.token } });
  const id = data?.id;
  const cacheResults = await redisClient.get(`user-${id}`);
  if (cacheResults) {
    const old_data = JSON.parse(cacheResults);
    const data_new = {
      ...data,
      current_time: new Date(),
      previous_time: old_data?.current_time,
    };
    await redisClient.set(`user-${id}`, JSON.stringify(data_new), {
      XX: true,
    });
  } else {
    data.current_time = new Date();
    data.previous_time = '';
    await redisClient.set(`user-${id}`, JSON.stringify(data), {
      NX: true,
    });
  }
}

module.exports = { addTaskToRedisCache, redisClient };
