import { Request, Response } from "express";

export function getPhotos(req: Request, res: Response) {
  return res.json({ message: "Get All photos" });
}

export function createPhoto(req: Request, res: Response) {
  console.log("saving photo");
  return res.json({ message: "Photo successfully saved" });
}
