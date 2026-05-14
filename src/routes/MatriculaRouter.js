import exprees from "express";
import {getMatricula,InsertMatricula,updateMatricula,deleteMatricula } from "../controller/MatriculaController.js";

const router = exprees.Router()

router.route("/")
.get(getMatricula)
.post(InsertMatricula)

router.route("/:id")
.put(updateMatricula)
.delete(deleteMatricula)

export default router