import mongoose,{Schema , model} from "mongoose"

const MatriculaSchema = new Schema(    
{
   student_id:{type:String},
   amount:{type:Number},
   paymentDate:{type:Number},
   method:{type:String},
   status:false,
   referenceNumber:{type:String}

},
{
    timestrap: true,
    stric:false 
}
);

export default model("matricula", MatriculaSchema);