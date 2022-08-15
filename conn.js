const {MongoClient}=require('mongodb');
const url="mongodb://localhost:27017";
const dbName="Bank";
const db=new MongoClient(url);

 async function  main(){
  const r1=await db.connect();
  const r2= r1.db(dbName);
  const r3= r2.collection("colls");
  return r3;
//   const d1=await  r3.find().toArray();

//   console.log(d1);

}


module.exports=main;
