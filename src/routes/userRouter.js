import { Router } from "express";
import { UserController } from "../controller/user.controller.js";

const userRouter = Router()

userRouter.get("/user/:id", UserController.userValidation)
userRouter.get("/allUsers", (req, res) => {}) //GetAll
userRouter.post("/user", UserController.userCreateOne)
userRouter.put("/user/:id", UserController.userUpdateOne)
userRouter.delete("/user/:id", UserController.userDeleteOne)
userRouter.delete("/allUsers", (req, res) => {})//DeleteAll

export {userRouter}