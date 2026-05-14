import express from "express"
import Materias from "./src/routes/MateriasRoutes.js"
import Matricula from "./src/routes/MatriculaRouter.js"
import Especialidades from "./src/routes/EspecialidadesRouter.js";

const app = express();

app.use (express.json());

app.use("/api/Materias", Materias);
app.use("/api/Matricula", Matricula);
app.use("/api/Especialidades" , Especialidades)

export default app