const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {type: String, required:true},
    slug: {type:String, required:true, unique:true},
    desc: {type:String, required:true},
    img: {type:String, required:true},
    category: {type:String, required:true},
    size: {type:String},
    color: {type:String},
    price: {type:String, required:true},
    availaible: {type:Number, required:true}
}, {timestamps: true})

mongoose.models = {}
export default new mongoose.model("Product", productSchema);