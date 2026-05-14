import MatriculaModel from "../models/MatriculaModel.js";

export const getMatricula = async(req,  res)=>{
    const Matricula = await MatriculaModel.find()
    res.json(Matricula)
}

export const InsertMatricula = async(req,res) => {
    const {student_id,amount,paymentDate,method,status,referenceNumber} = req.body
    const newMatriculaModel = ({student_id,amount,paymentDate,method,status,referenceNumber})
    await newMatriculaModel.save()
    res.json({message : "Matricula save"})
}

export const updateMatricula = async (req,res)=> {
    const{student_id,amount,paymentDate,method,status,referenceNumber} = req.body;
    await MatriculaModel.findByAndIdUpdate(req.params.id,{student_id,amount,paymentDate,method,status,referenceNumber},{new:true})
        res.json({message : "Matricula actualizado"})

}

export const deleteMatricula = async (req,res)=>{
    await MatriculaModel.findByAndIdDelete(req.params);
    res.json({message:"Matricula delete"})
}