import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  description: { type: String },
  module: { type: String },
});

const moduleSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    course: { type: String },
    lessons: [lessonSchema],
  },
  { collection: "modules" }
);

export default moduleSchema;
