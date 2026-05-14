import mongoose,{Schema , model} from "mongoose"

const EstudiantesSchema = new Schema(
{    
 name : {type:String},
 lastName: {type:String},
 email: {type:String},
password: {type:String},
 birthdate,
 speciality_id,
carnet: {type:String} ,
phone: {type:String},
isVerified,
loginAttempts,
timeOut,
}

)
