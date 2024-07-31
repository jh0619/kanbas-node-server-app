import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  const createAssignment = async (req, res) => {
    const { cid } = req.params;
    const newAssignment = { ...req.body, course: cid };
    const assignment = await dao.createAssignment(newAssignment);
    res.json(assignment);
  };

  const findAssignmentsByCourse = async (req, res) => {
    const { cid } = req.params;
    const assignments = await dao.findAssignmentsByCourse(cid);
    res.json(assignments);
  };

  const updateAssignment = async (req, res) => {
    const { aid } = req.params;
    const status = await dao.updateAssignment(aid, req.body);
    res.json(status);
  };

  const deleteAssignment = async (req, res) => {
    const { aid } = req.params;
    const status = await dao.deleteAssignment(aid);
    res.json(status);
  };

  app.post("/api/courses/:cid/assignments", createAssignment);
  app.get("/api/courses/:cid/assignments", findAssignmentsByCourse);
  app.put("/api/assignments/:aid", updateAssignment);
  app.delete("/api/assignments/:aid", deleteAssignment);
}
