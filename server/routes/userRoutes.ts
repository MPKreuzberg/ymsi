import express from 'express';
//import { protect }  from '../models/authMiddleware'

import {
    getUsersHandler,
    createUserHandler,
    getUserHandler,
    deleteUserHandler,
    updateUserHandler,
    loginUserHandler,
} from '../controllers/usercontroller';
const userRoutes = express.Router();

userRoutes.route('/').get(getUsersHandler).post(createUserHandler);
userRoutes.route('/login').post(loginUserHandler);
userRoutes
    .route('/:id')
    .get(getUserHandler)
    .patch(updateUserHandler)
    .delete(deleteUserHandler);

export default userRoutes;