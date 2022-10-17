import { Router } from "express";
import usersRoutes from "./users.routes";
import authRoutes from "./auth.routes";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/auth", authRoutes);

export default routes;
