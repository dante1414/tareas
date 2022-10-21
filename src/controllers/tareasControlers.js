import "dotenv/config";
import mongoose from "mongoose";
import Tarea from "../db/tarea.js";

export const homeTareas = (req, res) => {
  try {
    res.render("index.hbs", {
      style: "styls.css",
    });
  } catch (error) {
    console.log(error);
  }
};
export const verTareas = async (req, res) => {
  const tareas = await Tarea.find().lean();
  res.render("formulario.hbs", {
    tareas: tareas,
    style: "styls.css",
  });
};

export const agregarTareas = async (req, res) => {
  const { titulo, descripcion } = req.body;
  const tarea = Tarea(req.body);
  if (titulo == "" || descripcion == "") {
    const mensaje = "Complete los campos vacios";
    res.render("formulario.hbs", {
      mensaje,
      style: "styls.css",
    });
  } else {
    await tarea.save();
    res.redirect("tareas");
  }
};

export const editarTareas = async (req, res) => {
  try {
    const tarea = await Tarea.findById(req.params.id).lean();
    res.render("editar.hbs", {
      tarea: tarea,
      style: "styls.css",
      style: "editar.css",
    });
  } catch (error) {
    console.log(error);
  }
};

export const modificarTareas = async (req, res) => {
  try {
    const { id } = req.params;
    await Tarea.findByIdAndUpdate(id, req.body);
    res.redirect("/tareas");
  } catch (error) {
    console.log(error);
  }
};

export const eliminarTareas = async (req, res) => {
  try {
    const { id } = req.params;
    await Tarea.findByIdAndDelete(id);
    res.redirect("/tareas");
  } catch (error) {
    console.log(error);
  }
};

export const indicarTareas = async (req, res) => {
  try {
    const { id } = req.params;
    const tarea = await Tarea.findById(id);
    tarea.done = !tarea.done;
    await tarea.save();
    res.redirect("/tareas");
  } catch (error) {
    console.log(error);
  }
};
