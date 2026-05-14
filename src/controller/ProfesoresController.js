import ProfesoresModels from "../models/ProfersoresModel.js";

export const getProfesores = async(req,  res)=>{
    const Profesores = await ProfesoresModels.find()
    res.json(Profesores)
}

export const updateProfesores = async (req,res)=> {
    const{specialtyName,isAvailable} = req.body;
    await ProfesoresModels.findByAndIdUpdate(req.params.id,{specialtyName,isAvailable},{new:true})
        res.json({message : "Profesores actualizado"})

}

export const deleteProfesores = async (req,res)=>{
    await ProfesoresModels.findByAndIdDelete(req.params);
    res.json({message:"Profesores delete"})
}