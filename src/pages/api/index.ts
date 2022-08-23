import connectDB from '../../lib/dbConnect';
import Job from '../../models/Job'
import {v4} from 'uuid';
async function handler(req, res) {
  const { method } = req
  console.log(method);
    
  /* await dbConnect() */

  switch (method) {
    case 'GET':
      try {
        const result = await Job.find({});
        const jobs = result.map((doc) => {
        const job = doc.toObject();
        job.createdAt = JSON.parse(JSON.stringify(job.createdAt));
        job._id = job._id.toString();
        return job;
      });
      return res.status(200).json(jobs);
      } catch (error) {
        res.status(400).json({ success: false })
      }
    case 'POST':
        console.log('teste');
      try {
        const job = await Job.create({
          _id: v4(),
          ...req.body,
          createdAt: new Date()
        }
        ) /* create a new model in the database */
        res.status(201).json(job)
      } catch (error) {
        console.log(error);
        
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}

export default connectDB(handler);