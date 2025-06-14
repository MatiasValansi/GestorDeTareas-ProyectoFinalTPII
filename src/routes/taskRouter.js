import { Router } from "express";
import { TaskController } from "../controller/task.controller.js";

const taskRouter = Router();

taskRouter.get("/task/:id", TaskController.taskValidation);
taskRouter.get("/allTasks", (req, res) => {}); //GetAll
taskRouter.post("/task", TaskController.taskCreateOne);
taskRouter.put("/task/:id", TaskController.taskUpdateOne);
taskRouter.delete("/task/:id", TaskController.taskDeleteOne);
taskRouter.delete("/allTasks", (req, res) => {}); //DeleteAll

export { taskRouter };
