import MateriasModel from "../models/MateriasModel.js";

export const getMaterias = async(req,  res)=>{
    const Materias = await MateriasModel.find()
    res.json(Materias)
}

export const InsertMaterias = async(req,res) => {
    const {subjectName,teacher_id,isAvailable} = req.body
    const newMateriasmodel = ({subjectName,teacher_id,isAvailable})
    await newMateriasmodel.save()
    res.json({message : "Materias save"})
}

export const updateMaterias = async (req,res)=> {
    const{subjectName,teacher_id,isAvailable} = req.body;
    await MateriasModel.findByAndIdUpdate(req.params.id,{subjectName,teacher_id,isAvailable},{new:true})
        res.json({message : "Materias actualizado"})

}

export const deleteMateria = async (req,res)=>{
    await MateriasModel.findByAndIdDelete(req.params);
    res.json({message:"materias delete"})
}