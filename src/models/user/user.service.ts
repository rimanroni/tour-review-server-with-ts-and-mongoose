import { userType } from "./user.interface"
import { UserModel } from "./user.model"

const createUser = async(user:userType)  =>{
     const result = await UserModel.create(user)
     return result 
}
const getUserService = async () =>{
    const result = await UserModel.find();
    return result
}

const getSingleUser = async(id:string) =>{
    const result = await UserModel.findById(id);
    return result

}
const getSingleUserUpdate =  async(id:string, updateData:userType)=>{
      const result = await UserModel.findByIdAndUpdate(id, updateData,{new:true})
      return result
}
const deletUser = async(id:string)=>{
 const result = await UserModel.findByIdAndDelete(id)
 return result
}
export const userService = {
    createUser, 
    getUserService, 
    getSingleUser,
    getSingleUserUpdate , 
    deletUser
}