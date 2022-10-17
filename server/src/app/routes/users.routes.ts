import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import UsersController from "../controllers/UsersController";

const usersRoutes = Router();

usersRoutes.post("/", UsersController.create);
usersRoutes.get("/", authMiddleware, UsersController.findAll);
usersRoutes.get("/:id", authMiddleware, UsersController.findOne);
usersRoutes.put("/:id", authMiddleware, UsersController.update);
usersRoutes.delete("/:id", authMiddleware, UsersController.destroy);

export default usersRoutes;
