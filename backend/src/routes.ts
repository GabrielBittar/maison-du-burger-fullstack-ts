import { Router } from "express";
import { login, register } from "./controller/user-controller";

export const router = Router();

// user routes
router.post("/login", login);
router.post("/register", register);
