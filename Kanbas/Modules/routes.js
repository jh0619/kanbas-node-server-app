import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  //const createModule = async (req, res) => {
  //  console.log(req.body);
  //  const { cid } = req.params;
  //  const newModule = { ...req.body, course: cid };
  //  const module = await dao.createModule(newModule);
  //  res.json(module);
  //};

  const createModule = async (req, res) => {
    console.log(req.body);
    try {
      const { cid } = req.params;
      const module = { ...req.body, cid };
      const createdModule = await dao.createModule(module);
      res.status(201).json(createdModule);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const findAllModules = async (req, res) => {
    const modules = await dao.findAllModules();
    res.json(modules);
  };

  const findModulesByCourse = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findModulesByCourse(cid);
    res.json(modules);
  };

  const findModuleById = async (req, res) => {
    const module = await dao.findModuleById(req.params.mid);
    res.json(module);
  };

  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body);
    res.json(status);
  };

  const deleteModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.deleteModule(mid);
    res.json(status);
  };

  app.post("/api/courses/:cid/modules", createModule);
  //app.post("/api/modules", createModule);
  app.get("/api/modules", findAllModules);
  app.get("/api/courses/:cid/modules", findModulesByCourse);
  app.get("/api/modules/:mid", findModuleById);
  app.put("/api/modules/:mid", updateModule);
  app.delete("/api/modules/:mid", deleteModule);
}
