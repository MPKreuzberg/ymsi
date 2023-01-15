import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import usersRoute from "./routes/userRoutes";
import mongoose from "mongoose";
import controllers from "./controllers";
import passport from "passport";

dotenv.config();
const app = express();
const port = process.env.PORT || 80;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(passport.initialize());
//app.use(passport.session());
//app.use(express.static(path.join(__dirname, 'public')));

// API routes
 app.use('/users', controllers.userController);
 app.use('/api/usergroups', controllers.userGroupController);
// app.use('/api/categories', controllers.categoryController);
// app.use('/api/subcategories', controllers.subcategoryController);
// app.use('/api/topics', controllers.topicController);
// app.use('/api/posts', controllers.postController);
// app.use('/api/stats', controllers.statsController);


//app.use(usersRoute);

app.listen(port, () => {
  console.log(`Forum backend is running on port ${port}!`);
});
