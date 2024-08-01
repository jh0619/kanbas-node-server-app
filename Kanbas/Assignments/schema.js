import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    title: { type: String },
    course: { type: String },
    availabilityDt: { type: Date },
    availabilityUntil: { type: Date },
    dueDt: { type: Date },
    availability: { type: String },
    due: { type: String },
    points: { type: Number },
    description: { type: String },
  },
  { collection: "assignments" }
);

export default assignmentSchema;
