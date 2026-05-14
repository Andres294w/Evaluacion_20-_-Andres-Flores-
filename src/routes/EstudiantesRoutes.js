import exprees from "express";
import {getEstudiantes,deleteEstudiantes,updateEstudiante } from "../controller/EstudiantesController.js";

const router = exprees.Router()

router.route("/")
.get(getEstudiantes)
.post()

router.route("/:id")
.put(updateEstudiante)
.delete(deleteEstudiantes)

export default router