import express from 'express';
import {  UserController  } from './user.controller';

const userRouter = express.Router();

userRouter.post('/createUser',  UserController.createUser);
userRouter.get('/', UserController.getUser);
userRouter.get("/:userId", UserController.getSingleControllar);
userRouter.put('/:userId', UserController.updateUserControllar);
userRouter.delete('/:userId', UserController.deleteControllar);
export default userRouter;