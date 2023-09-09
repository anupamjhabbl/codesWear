// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default function handler(req,res) {
  fs.readFile(`blogposts/${req.query.slug}`,'utf-8', (err, data) => {
    if (err){
      res.status(400).json({error:"No such blog is here"});
    }
    else{
      res.status(200).json(JSON.parse(data));
    }
  })
}
