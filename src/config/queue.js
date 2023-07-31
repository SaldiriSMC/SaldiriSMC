const Queue = require('bull');
const { DATE } = require('sequelize');
const queue = () =>{
    const queue = new Queue('myQueue', 'redis://localhost:6379');

    // Process the job when it's added to the queue
    queue.process(async (job) => {
      console.log(`Processing job ${job.id}: ${job.data.token}`);
      // Simulate some asynchronous task, e.g., waiting for 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(`Job ${job.id} completed.`);
    });
    
    // Event handler when a new job is added to the queue
    queue.on('global:completed', (job, result) => {
        console.log("job------>>", job, "result------>>>", result)
      console.log(`Job ${job.id} has been completed with result: ${result}`);
    });
    
    // Event handler when a job failed
    queue.on('failed', (job, err) => {
      console.error(`Job ${job.id} failed with error: ${err.message}`);
    });
    console.log('Queue server started.');
}
module.exports = {queue}