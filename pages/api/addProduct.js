import Product from './../../models/product';
import connectToDb from '../../middleware/db';

const handler = async (req, res) => {
    if (req.method=='POST'){
        for (let i=0;i<req.body.length;i++){
            let p = new Product({
                title:req.body[i].title,
                slug:req.body[i].slug,
                desc:req.body[i].desc,
                img:req.body[i].img,
                category:req.body[i].category,
                size:req.body[i].size,
                color:req.body[i].color,
                price:req.body[i].price,
                availaible:req.body[i].availaible
            })
            try{
                await p.save();
            }
            catch(err){
                res.status(500).json({"error":"Some internal server error occured"});
            }
        }
        res.status(200).json({"message":"success"});
    }
    else{
        res.status(400).json({error:"This page is not available"});
    }
}

export default connectToDb(handler);