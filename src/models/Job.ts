import mongoose from "mongoose";

interface IJobSchema {
  _id?: string;
  companyName: string;
  jobTitle: string;
  description: string;
  location: string;
  createdAt: Date;
}

const JobSchema = new mongoose.Schema<IJobSchema>({
  _id: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IJobSchema>("Job", JobSchema);
