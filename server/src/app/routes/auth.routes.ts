import { Router } from "express";
import AuthController from "@controllers/AuthController";

const sessionsRoutes = Router();

sessionsRoutes.post("/", AuthController.authenticate);

export default sessionsRoutes;
