import exprees from "express";
import {updateProfesores,getProfesores,deleteProfesores } from "../controller/ProfesoresController.js";

const router = exprees.Router()

router.route("/")
.get(getProfesores)
.post()

router.route("/:id")
.put(updateProfesores)
.delete(deleteProfesores)


export default router