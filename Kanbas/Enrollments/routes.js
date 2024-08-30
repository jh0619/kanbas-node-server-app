import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.get("/api/enrollments/:studentId", async (req, res) => {
    try {
      const studentId = req.params.studentId;
      const enrollments = await dao.findEnrollmentsForStudent(studentId);
      if (!enrollments) {
        return res.json([]);
      }
      res.json(enrollments);
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/enrollments/course/:courseId", async (req, res) => {
    try {
      const courseId = req.params.courseId;
      const enrollments = await dao.findEnrollmentsForCourse(courseId);
      if (!enrollments) {
        return res.json([]);
      }
      const studentIds = enrollments.map((enrollment) => enrollment.student);
      const faculty = await dao.findFacultyForCourse(courseId);
      const userIds = [...studentIds, faculty.facultyId];
      const users = await dao.findUsersByIds(userIds);
      res.json(users);
    } catch (error) {
      console.error("Error fetching users for the course:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/enrollments", async (req, res) => {
    const { student, course } = req.body;
    const existingEnrollment = await dao.findEnrollment(student, course);
    if (existingEnrollment) {
      res.status(400).json({ message: "Already enrolled in this course" });
      return;
    }
    const newEnrollment = await dao.enrollStudentInCourse({ student, course });
    res.json(newEnrollment);
  });

  app.delete("/api/enrollments/:studentId/:courseId", async (req, res) => {
    try {
      const { studentId, courseId } = req.params;
      await dao.unenrollStudentFromCourse(studentId, courseId);
      res.sendStatus(204);
    } catch (error) {
      console.error("Error unenrolling student from course:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
}
