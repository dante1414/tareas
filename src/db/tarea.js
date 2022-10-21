import { Schema, model } from "mongoose";

const tareaTabla = new Schema(
  {
    titulo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Tarea", tareaTabla);
