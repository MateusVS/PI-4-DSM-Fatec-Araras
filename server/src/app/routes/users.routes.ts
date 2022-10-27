import { Router } from "express";
import authMiddleware from "@middlewares/auth";
import UsersController from "@controllers/UsersController";

const usersRoutes = Router();

usersRoutes.post("/", UsersController.create);
usersRoutes.get("/", authMiddleware, UsersController.index);
usersRoutes.get("/:id", authMiddleware, UsersController.show);
usersRoutes.put("/:id", authMiddleware, UsersController.update);
usersRoutes.delete("/:id", authMiddleware, UsersController.destroy);

export default usersRoutes;
