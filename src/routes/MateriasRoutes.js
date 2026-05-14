import exprees from "express";
import { getMaterias,InsertMaterias,deleteMateria,updateMaterias } from "../controller/Materiascontroller";

const router = exprees.Router()

router

router("/")
.get(getMaterias)
.post(InsertMaterias)

router

router("/:id")
.put(updateMaterias)
.delete(deleteMateria)

export default router