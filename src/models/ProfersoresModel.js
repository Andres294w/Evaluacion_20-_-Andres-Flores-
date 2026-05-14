import mongoose,{Schema , model} from "mongoose"

const ProfesoresSchema = new Schema(    
{
 name : {type:String},
 lastName: {type:String},
 email: {type:String},
password: {type:String},
hireDate:{type:Date},
phone: {type:String},
isActive:{type:Boolean},
isVerified:{type:Number},
loginAttempts:{type:Boolean},
timeOut:{type:Date}

},
{
    timestrap: true,
    stric:false 
}
);

export default model("profesores", ProfesoresSchema);