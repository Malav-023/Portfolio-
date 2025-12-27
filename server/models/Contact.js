import mongoose from "mongoose"; 

const contactSchema = new mongoose.Schema({
    name: {type:String, required:true, trim: true }, 
    email: {type:String, required:true, trim: true },
    message: {type:String, default:""},
    data: {type:Date, dafault:Date.now}
});

export default mongoose.model("Contact", contactSchema); 