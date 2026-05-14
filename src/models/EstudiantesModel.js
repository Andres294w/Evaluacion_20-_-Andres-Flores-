import mongoose,{Schema , model} from "mongoose"

const EstudiantesSchema = new Schema(
{    
 name : {type:String},
 lastName: {type:String},
 email: {type:String},
password: {type:String},
birthdate:{type:Date},
speciality_id:{type:String},
carnet: {type:String} ,
phone: {type:String},
isVerified:{type:Number},
loginAttempts:{type:Boolean},
timeOut:{type:Date}
},{ 
    timestrap: true,
    stric:false
 });

 export default model("Estudiantes", EstudiantesSchema);