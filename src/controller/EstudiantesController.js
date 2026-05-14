import EspecialidadesModel from "../models/EspecialidadesModel.js";

export const getMatricula = async(req,  res)=>{
    const Especialidades = await EspecialidadesModel.find()
    res.json(Especialidades)
}

export const updateMatricula = async (req,res)=> {
    const{specialtyName,isAvailable} = req.body;
    await EspecialidadesModel.findByAndIdUpdate(req.params.id,{specialtyName,isAvailable},{new:true})
        res.json({message : "Especialidades actualizado"})

}

export const deleteMatricula = async (req,res)=>{
    await EspecialidadesModel.findByAndIdDelete(req.params);
    res.json({message:"Especialidadesricula delete"})
}