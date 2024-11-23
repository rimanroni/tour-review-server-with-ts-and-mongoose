import express, { Application, Request, Response } from 'express';
const app:Application = express();
import cors from 'cors'
import userRouter from './models/user/user.router';
// parser
app.use(express.json()); 
app.use(cors());

// router 
app.use('/api/v1/user', userRouter)


app.get('/', (req:Request, res:Response)=>{
      res.send({
        status : true, 
        message : "data response done ", 
        data : "Hello Next Lavel Developer 💕😐👻"
      })
})

export default app;
