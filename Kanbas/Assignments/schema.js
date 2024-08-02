import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    title: { type: String },
    course: { type: String },
    availabilityDt: { type: String },
    availabilityUntil: { type: String },
    dueDt: { type: String },
    availability: { type: String },
    due: { type: String },
    points: { type: Number },
    description: { type: String },
  },
  { collection: "assignments" }
);

export default assignmentSchema;
