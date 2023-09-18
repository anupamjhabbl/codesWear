import connectToDb from './../../middleware/db';
import Product from './../../models/product';

const handler = async (req, res) => {
    try{
        let products = await Product.find();
        res.status(200).json({products});
    }
    catch(err){
        res.status(500).json({"error":"Some internal server error occured"});
    }
}

export default connectToDb(handler);