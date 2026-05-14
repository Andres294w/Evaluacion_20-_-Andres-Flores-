import exprees from "express";
import { getMaterias,InsertMaterias,deleteMateria,updateMaterias } from "../controller/Materiascontroller.js";

const router = exprees.Router()

router.route("/")
.get(getMaterias)
.post(InsertMaterias)

router.route("/:id")
.put(updateMaterias)
.delete(deleteMateria)

export default router