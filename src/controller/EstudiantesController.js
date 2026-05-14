import EstudiandesModel from "../models/EstudiantesModel.js";

export const getMatricula = async(req,  res)=>{
    const Especialidades = await EstudiandesModel.find()
    res.json(Especialidades)
}

export const updateMatricula = async (req,res)=> {
    const{specialtyName,isAvailable} = req.body;
    await EstudiandesModel.findByAndIdUpdate(req.params.id,{specialtyName,isAvailable},{new:true})
        res.json({message : "Especialidades actualizado"})

}

export const deleteMatricula = async (req,res)=>{
    await EstudiandesModel.findByAndIdDelete(req.params);
    res.json({message:"Especialidadesricula delete"})
}