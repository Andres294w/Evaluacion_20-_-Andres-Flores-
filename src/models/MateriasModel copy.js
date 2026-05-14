import mongoose,{Schema , model} from "mongoose"

const MateriasSchema = new Schema(    
{
    subjectName:{type: String},
    teacher_id: {type : String},
    isAvailable:{type: Boolean}

},
{
    timestrap: true,
    stric:false 
}
);

export default model("materias", MateriasSchema);