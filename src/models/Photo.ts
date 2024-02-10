import { Schema, model, Document } from "mongoose";

const schema = new Schema({
  title: String,
  description: String,
  imagePath: String,
});

interface IPhoto extends Document {
  title: string;
  description: string;
  imagePath: string;
}

// Obeys the model to match the structure
export default model<IPhoto>("Photo", schema);
