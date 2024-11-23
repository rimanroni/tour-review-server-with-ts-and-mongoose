import { Request, Response } from "express";
 import { userService } from "./user.service";


 const createUser  = async(req:Request, res:Response) =>{
       try{
        const pyload  = req.body;
        const result = await userService.createUser(pyload)
       res.status(200).json({
        status : true,
        message : "successfuly user create ", 
        data : result
       })

       }
       catch(error){
           res.json({
            status : false ,
            message : "something wrong", 
            error
           })
       }
 } 

 const getUser = async (req:Request, res:Response) =>{
    try{
        const reuslt = await userService.getUserService()
        res.status(200).json({
            status:true, 
            message : "all user data redy for you", 
            data : reuslt
        })
 
    }catch(error){
        res.json({
         status : false ,
         message : "something wrong", 
         error
        })
    }
 }

const getSingleControllar = async(req:Request, res:Response) =>{
 try{
    const id = req.params.userId;
    const result = await userService.getSingleUser(id)
    res.status(200).json({
        status : true, 
        message : 'redy single user', 
        data : result
    })
 }catch(error){
    res.json({
     status : false ,
     message : "something wrong", 
     error
    })
}

}
const updateUserControllar = async(req:Request, res:Response) =>{
 try{
    const id = req.params.userId;
    const data = req.body;
    const result = await userService.getSingleUserUpdate(id, data)
    res.status(200).json({
        status : true, 
        message : 'user update successfully', 
        data : result
    })
 }catch(error){
    res.json({
     status : false ,
     message : "something wrong", 
     error
    })
}

}
const deleteControllar = async(req:Request, res:Response) =>{
 try{
    const id = req.params.userId;
    const result = await userService.deletUser(id)
    res.status(200).json({
        status : true, 
        message : 'user delete successfully', 
        data : result
    })
 }catch(error){
    res.json({
     status : false ,
     message : "something wrong", 
     error
    })
}

}

export const UserController = {
    createUser ,  
    getUser, 
    getSingleControllar, 
    updateUserControllar , 
    deleteControllar 
}