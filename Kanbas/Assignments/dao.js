import assignmentModel from "./model.js";

export const createAssignment = (assignment) =>
  assignmentModel.create(assignment);
export const findAllAssignments = () => assignmentModel.find();
export const findAssignmentsByCourse = (courseId) =>
  assignmentModel.find({ course: courseId });
export const updateAssignment = (assignmentId, assignment) =>
  assignmentModel.updateOne({ _id: assignmentId }, { $set: assignment });
export const deleteAssignment = (assignmentId) =>
  assignmentModel.deleteOne({ _id: assignmentId });
