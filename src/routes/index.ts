import { Router } from "express";
import { helloWorld } from "../controllers/photo.controller";

const router = Router();

router.route("/").get(helloWorld);

export default router;
