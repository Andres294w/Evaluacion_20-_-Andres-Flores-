import EstudiantesModel from "../models/EstudiantesModel.js";



export const getEstudiantes = async(req,  res)=>{
    const Estudiantes = await EstudiantesModel.find()
    res.json(Estudiantes)
}

export const updateEstudiantes = async (req,res)=> {
    const{specialtyName,isAvailable} = req.body;
    await EstudiantesModel.findByAndIdUpdate(req.params.id,{specialtyName,isAvailable},{new:true})
        res.json({message : "Estudiantes actualizado"})

}

export const deleteEstudiantes = async (req,res)=>{
    await EstudiantesModel.findByAndIdDelete(req.params);
    res.json({message:"Estudiantes delete"})
}