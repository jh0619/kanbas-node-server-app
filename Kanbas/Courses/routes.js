import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const createCourse = async (req, res) => {
    const { facultyId } = req.params;
    const courseData = req.body;
    const course = { ...courseData, facultyId };
    const createdCourse = await dao.createCourse(course);
    res.send(createdCourse);
  };

  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  };

  const findCourseById = async (req, res) => {
    const course = await dao.findCourseById(req.params.courseId);
    res.json(course);
  };

  const updateCourse = async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.updateCourse(courseId, req.body);
    res.json(status);
  };

  const deleteCourse = async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.deleteCourse(courseId);
    res.json(status);
  };

  //Fetch courses by Faculty
  const fetchCoursesByFaculty = async (req, res) => {
    const { facultyId } = req.params;
    const courses = await dao.findCoursesByFaculty(facultyId);
    res.json(courses);
  };

  app.post("/api/courses/:facultyId", createCourse);
  app.get("/api/courses", findAllCourses);
  app.get("/api/courses/:courseId", findCourseById);
  app.put("/api/courses/:courseId", updateCourse);
  app.delete("/api/courses/:courseId", deleteCourse);
  app.get("/api/courses/faculty/:facultyId", fetchCoursesByFaculty);
}
