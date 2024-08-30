import EnrollmentModel from "./model.js";
import UserModel from "../../User/model.js";
import CourseModel from "../Courses/model.js";

export const findEnrollmentsForStudent = (studentId) =>
  EnrollmentModel.find({ student: studentId }).populate("course");

export const enrollStudentInCourse = (enrollment) =>
  EnrollmentModel.create(enrollment);

export const findEnrollment = (studentId, courseId) =>
  EnrollmentModel.findOne({ student: studentId, course: courseId });

export const unenrollStudentFromCourse = (studentId, courseId) =>
  EnrollmentModel.deleteOne({ student: studentId, course: courseId });

// Deleting enrollements when a course is deleted
export const deleteEnrollmentsByCourse = async (courseId) => {
  return EnrollmentModel.deleteMany({ course: courseId });
};

export const findEnrollmentsForCourse = (courseId) => {
  return EnrollmentModel.find({ course: courseId });
};

export const findFacultyForCourse = (courseId) => {
  return CourseModel.findOne({ _id: courseId }).select("facultyId");
};

export const findUsersByIds = (userIds) => {
  return UserModel.find({ _id: { $in: userIds } });
};
