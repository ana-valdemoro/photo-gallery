import { Request, Response } from "express";
import Photo from "../models/Photo";

export async function getPhotos(
  req: Request,
  res: Response
): Promise<Response> {
  const photosArray = await Photo.find();
  return res.json(photosArray);
}

export async function createPhoto(
  req: Request,
  res: Response
): Promise<Response> {
  const { title, description } = req.body;

  if (req === undefined || req.file === undefined)
    return res
      .status(400)
      .json({ message: "Bad Request: Image is not being sent" });

  const newPhoto = {
    title,
    description,
    imagePath: req.file.path,
  };

  const photo = new Photo(newPhoto);

  await photo.save();

  console.log("saving photo", photo);
  return res.json({ message: "Photo successfully saved", photo });
}
