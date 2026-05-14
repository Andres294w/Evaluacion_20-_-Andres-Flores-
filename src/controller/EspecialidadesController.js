import EspecialidadesModel from "../models/EspecialidadesModel.js";

export const getEspecialidades = async(req,  res)=>{
    const Especialidades = await EspecialidadesModel.find()
    res.json(Especialidades)
}

export const InsertEspecialidades = async(req,res) => {
    const {specialtyName,isAvailable} = req.body
    const newEspecialidadesModel = ({specialtyName,isAvailabler})
    await newEspecialidadesModel.save()
    res.json({message : "Especialidades save"})
}

export const updateEspecialidades = async (req,res)=> {
    const{specialtyName,isAvailable} = req.body;
    await EspecialidadesModel.findByAndIdUpdate(req.params.id,{specialtyName,isAvailable},{new:true})
        res.json({message : "Especialidades actualizado"})

}

export const deleteEspecialidades = async (req,res)=>{
    await EspecialidadesModel.findByAndIdDelete(req.params);
    res.json({message:"Especialidadesricula delete"})
}