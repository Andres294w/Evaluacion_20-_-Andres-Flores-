import exprees from "express";
import { getMaterias,InsertMaterias,deleteMateria,updateMaterias } from "../controller/Materiascontroller";

const router = exprees.Router()

router("./")
.get(getMaterias)
.post(InsertMaterias)

router("./id")
.put(updateMaterias)
.delete(deleteMateria)
