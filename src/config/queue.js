const Queue = require('bull');
const { addTaskToRedisCache, redisClient } = require('./redisProducer');
const { Token } = require('../models/v2/index');
const queue = () => {
  const queue = new Queue('myQueue', 'redis://localhost:6379');

  // Process the job when it's added to the queue
  queue.process(async (job) => {
    console.log(`Processing job ${job.id}: ${job.data}`);
     addTaskToRedisCache({ ...job.data, isOnline: true });
    await new Promise((resolve) => setTimeout(resolve, 180000));
    console.log(`Job ${job.id} completed.`);
  });

  // Event handler when a new job is added to the queue
  queue.on('completed', async (job, result) => {
    const jobdata = await queue.getJob(job.id);
    const cacheResults = await redisClient.get(`user-${jobdata.data.id}`);
    console.log("i am in job completetion of queue ",cacheResults)
    // const token = await Token.findOne({ where: { token: jobdata.data.token } });
    // const id = token?.user;
    // console.log("id--------->>>>>>>>", id)
    // console.log(`Job ${job.id} has been completed with result:`, result);
    // console.log('Job data:', jobdata.data.token);
  });

  // Event handler when a job failed
  queue.on('failed', (job, err) => {
    console.error(`Job ${job.id} failed with error: ${err.message}`);
  });
  console.log('Queue server started.');
};

module.exports = { queue };
