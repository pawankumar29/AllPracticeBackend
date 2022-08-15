
const express=require('express');
const app=express();
const conn=require('./conn');
const path=require('path');
const d=path.join(__dirname);
const cors=require('cors');
app.use(express.json());
 app.use(express.static(d));
 app.use(cors(
      {
      // origin:'http://127.0.0.1:5500'
      }
  ))
app.use(express.urlencoded({extended:false}));

const d1=(req,res,next)=>{
       if(req.query.Name=="pawan"){
          next();
       }
       else{
        res.send("no");
       }
}
app.get('/hello',async(req,res)=>{
      const r=await conn();
      const t=await r.find(req.query).toArray();
      res.json(t);
})

app.post('/hello',async(req,res)=>{
      const r=await conn();
      await r.insertOne(req.body);
      
})

app.get('/Nello',async(req,res)=>{
     const d= await conn();
     const r=await d;
     console.log(d);
     const r1=await d.find().toArray()
     res.send(r1);
})

app.listen(8000);
