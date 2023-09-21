const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {type: String, required:true},
    slug: {type:String, required:true, unique:true},
    desc: {type:String, required:true},
    category: {type:String, required:true},
    variants:{
        SM:[{price:{type:Number},color:{type:String},img:{type:String},available:{type:Number}}],
        M:[{price:{type:Number},color:{type:String},img:{type:String},available:{type:Number}}],
        L:[{price:{type:Number},color:{type:String},img:{type:String},available:{type:Number}}],
        XL:[{price:{type:Number},color:{type:String},img:{type:String},available:{type:Number}}],
        XXL:[{price:{type:Number},color:{type:String},img:{type:String},available:{type:Number}}]
    }
}, {timestamps: true})

mongoose.models = {}
export default new mongoose.model("Product", productSchema);