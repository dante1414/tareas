import { Router } from "express";
import {
  homeTareas,
  verTareas,
  agregarTareas,
  editarTareas,
  modificarTareas,
  eliminarTareas,
  indicarTareas,
} from "../controllers/tareasControlers.js";

export const router = Router();

router.get("/", homeTareas);
router.get("/tareas", verTareas);
router.post("/addTareas", agregarTareas);
router.get("/editar/:id", editarTareas);
router.post("/editar/:id", modificarTareas);
router.get("/eliminar/:id", eliminarTareas);
router.get("/indicar/:id", indicarTareas);
