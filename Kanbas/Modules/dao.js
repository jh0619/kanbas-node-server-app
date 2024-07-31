import moduleModel from "./model.js";

export const createModule = (module) => moduleModel.create(module);
export const findAllModules = () => moduleModel.find();
export const findModuleById = (moduleId) => moduleModel.findById(moduleId);
export const findModulesByCourse = (courseId) =>
  moduleModel.find({ course: courseId });
export const updateModule = (moduleId, module) =>
  moduleModel.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) =>
  moduleModel.deleteOne({ _id: moduleId });
