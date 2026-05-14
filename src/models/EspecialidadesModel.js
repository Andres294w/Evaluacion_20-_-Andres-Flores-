import mongoose,{Schema , model} from "mongoose"

const EspecialidadesSchema = new Schema(    
{
    specialtyName:{type:String},
    isAvailable:{type: Boolean}
},
{
    timestrap: true,
    stric:false 
}
);

export default model("Especialidades", EspecialidadesSchema);