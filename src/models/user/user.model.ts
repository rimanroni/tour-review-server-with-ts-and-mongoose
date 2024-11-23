import { model, Schema } from "mongoose";
import { userType } from "./user.interface";

const userSchema = new Schema<userType>({
    name : {type : String ,
        minlength:4,
        required:true
    }, 
    age : {type : Number , required : [true, 'please provide age'] }, 
    email : {type : String,
         require : [true, 'please provide your email'], 
         unique:true, 
        validate:{
            validator: (value:string) => {
                // Regular expression for email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value); // Returns true if email is valid
            },
            message: 'Please provide a valid email'
        },
        immutable:true
        }, 
    photo : String, 
    role : {type : String, 
        enum:{
            values:['user','admin',
                
                ], 
                message:"{VALUE} role must be active or inactive"},
                default : "user"
                , required : true}, 
    userStatus : {type : String, enum:['active', 'inactive'], required:true},
 });

userSchema.pre("find", function (this, next){
 this.find({
    userStatus : {$eq :'active'}, 
  })
  
  next()
})

export  const UserModel = model('User', userSchema);


