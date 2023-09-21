import Product from './../../models/product';
import connectToDb from '../../middleware/db';

const handler = async (req, res) => {
    if (req.method=='POST'){
        for (let i=0;i<req.body.length;i++){
            let title = req.body[i].title;
            let product = await Product.find({title:title});
            if (product.length!=0){
                product = product[0];
                let size = req.body[i].size;
                let color = req.body[i].color;
                let img = req.body[i].img;
                let price = req.body[i].price;
                let colorsArr = product.variants[size];
                let done = 0;
                for (let element of colorsArr){
                    if (element.color==color){
                        element.available = element.available + req.body[i].available;
                        done = 1;
                        break;
                    }
                }
                if (done==0){
                    let obj = {
                        color:color,
                        img:img,
                        price:price,
                        available:req.body[i].available
                    }
                    product.variants[size].push(obj);
                }
                let product_id = product._id;
                try{
                    await Product.findByIdAndUpdate(product_id,product);
                    res.status(200).json({"message":"success"});
                }
                catch(err){
                    res.status(500).json({"error":"Internal server error occured"});
                }
            }
            else{
                let p = new Product({
                    title:req.body[i].title,
                    slug:req.body[i].slug,
                    desc:req.body[i].desc,
                    category:req.body[i].category,
                    variants: {
                        SM: req.body[i].size=="SM" ? [{ price: req.body[i].price, color: req.body[i].color, img: req.body[i].img, available: req.body[i].available }] : [],
                        M: req.body[i].size=="M" ? [{ price: req.body[i].price, color: req.body[i].color, img: req.body[i].img, available: req.body[i].available }] : [],
                        L: req.body[i].size=="L" ? [{ price: req.body[i].price, color: req.body[i].color, img: req.body[i].img, available: req.body[i].available }] : [],
                        XL: req.body[i].size=="XL" ? [{ price: req.body[i].price, color: req.body[i].color, img: req.body[i].img, available: req.body[i].available }] : [],
                        XXL: req.body[i].size=="XXL" ? [{ price: req.body[i].price, color: req.body[i].color, img: req.body[i].img, available: req.body[i].available }] : [],
                    }
                })
                try{
                    await p.save();
                    res.status(200).json({"message":"success"});
                }
                catch(err){
                    res.status(500).json({"error":err});
                }
            }
        }
    }
    else{
        res.status(400).json({error:"This page is not available"});
    }
}

export default connectToDb(handler);