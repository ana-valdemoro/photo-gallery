import { Router } from "express";
import { createPhoto, getPhotos } from "../controllers/photo.controller";

const router = Router();

router.route("/photos").post(createPhoto).get(getPhotos);

export default router;
