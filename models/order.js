const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: {type: String, required:true},
    products: [{
        product_id: {type:String, required:true},
        qunatity: {type:Number, default:1}
    }],
    address: {type:String, required:true},
    amount: {type:Number, required:true},
    status: {type:String, default:"pending",required:true}
}, {timestamps: true})

mongoose.models = {}
export default new mongoose.model("Order",orderSchema);