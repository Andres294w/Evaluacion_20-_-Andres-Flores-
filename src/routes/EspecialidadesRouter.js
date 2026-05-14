import exprees from "express";
import {getEspecialidades,InsertEspecialidades,updateEspecialidades,deleteEspecialidades } from "../controller/EspecialidadesController.js";

const router = exprees.Router()

router.route("/")
.get(getEspecialidades)
.post(InsertEspecialidades)

router.route("/:id")
.put(updateEspecialidades)
.delete(deleteEspecialidades)

export default router