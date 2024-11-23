import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function server(){
 try{
   await mongoose.connect(config.dbURL as string)
  app.listen(config.port, ()=>{
    console.log("our server is running 💞📛")
  })


 }
 catch(error){
  console.log(error);
 }
  

}

server();

