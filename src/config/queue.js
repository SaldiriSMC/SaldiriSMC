const Queue = require('bull');
const { addTaskToRedisCache, redisClient } = require('./redisProducer');
const { Token, Attendance } = require('../models/v2/index');
const { attendanceService } = require('../services/v2');
const moment = require('moment');
const myQueue = new Queue('myQueue', 'redis://localhost:6379', {
  limiter: {
    max: 100, // Maximum number of jobs processed concurrently
    duration: 150000, // Time window in milliseconds
  },  
  });
const queue = async () => {
  
  myQueue.process(300, async (job) => {
    console.log(`Processing job ${job.id}: ${job.data.token}`);
    await addTaskToRedisCache({ ...job.data, isOnline: true });
    await new Promise((resolve) => setTimeout(resolve, 150000));
  });

  // Event handler when a new job is added to the queue
  myQueue.on('completed', async (job, result) => {
    const cacheResults = await redisClient.get(`user-${job?.data.id}`);
    const cacheObject = JSON.parse(cacheResults);
    console.log("cacheObject------->>>>>>>",cacheObject)
    if (cacheObject) {
      const time = moment(new Date());
      const current_Time = moment(cacheObject?.current_time);
      const duration = moment.duration(time.diff(current_Time));
      const minutes = duration.minutes();
      console.log("minutes------>>>>",minutes)
      if (minutes > 0) {
        cacheObject.isOnline = false;
        redisClient.set(`user-${job.data.id}`, JSON.stringify(cacheObject), {
          XX: true,
        });
        if(job.data){
          await Token.destroy({ where: { token: job?.data.token, type: 'auth' } });
        let attendanceDoc = await Attendance.findOne({ where: { id: job?.data?.attendanceId } });
        await attendanceService.markTimeOut(job?.data?.timeId, attendanceDoc, current_Time);
        }
      }
      await job.finished( )
      //await myQueue.close()
    }
  });
  // Event handler when a job failed
  myQueue.on('failed', (job, err) => {
    console.error(`Job ${job.id} failed with error: ${err.message}`);
  });

  console.log('Queue server started.');

};

module.exports = { queue, myQueue };
