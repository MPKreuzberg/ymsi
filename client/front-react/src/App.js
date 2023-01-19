import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CreateUserPage } from './components/CreateUserPage/CreateUserPage';
import { LoginPage } from './components/LoginPage/LoginPage';
import { ResetPassword } from './components/ResetPassword/ResetPassword';
import { CreatePost } from './components/CreatePost/CreatePost';
import { UserProfile } from './components/UserProfile/UserProfile';

import Home from './Home.jsx';

import expresss from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
import morgan from "morgan"
import multer from "multer"
import path from "path"
import {fileURLToPath} from "url"
import usersRoute from "./routes/usersRoutes.ts"

/* import cors from "cors" */
const __dirname= path.dirname(fileURLToPath(import.meta.url))
//creating/initializing express server
const app = express()
const PORT = process.env.PORT || 4000; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<LoginPage/>} />
          <Route path="/signup" element={<CreateUserPage />} />
          <Route path='/recover' element={<ResetPassword />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/userprofile' element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}



//setup multer diskStorage
const storage = multer.diskStorage({
  destination:function(req,file,cb){
      let fullPath= "./upload"
      cb(null, fullPath)
  },
  filename:function(req,file,cb){
      let fileName = Date.now()+"_"+ file.originalname
      cb(null,fileName)
  }
})
const upload = multer({storage:storage})

//create mongoose connection
mongoose.connect(process.env.MONGO_URI , ()=>{
  console.log("DB connection established ! ")
})

//cors middleware
/* app.use(cors({origin:"http://localhost:3000",exposedHeaders:["token"]})) */

// app.use all methods : get,post,patch, ..... any URL 
// external and custom middleware

//expres json middleware to parse any incoming json data
app.use(express.json())


//cookie parser
app.use(cookieParser())


// serve static files/pages
/* app.use(express.static("upload")) */
// serve static files in views/build folder
app.use(express.static(path.resolve(__dirname, "views/build")))

app.get("/",(req,res)=>{
  res.sendFile(path.resolve(__dirname, "views/build/index.html"))
})


//Routes 
// "/users" GET POST PATCH DELETE // upload.single will attached req.file
app.use("/users", upload.single("image"),  usersRoute)


// handling 404 page not found error (error handling middleware)
app.use( (req,res,next)=>{
 /*  res.json({success:false, message:"there is no such route found"}) */
  res.sendFile("./views/pageNotFound.html",{root:"."})
})


//universal error handler middleware
// request along with an error enters into this middleware
app.use(( err, req,res,next)=>{
  res.status(err.status || 500).json({success:false, message:err.message})
})

//listening request on port 4000
app.listen(PORT, ()=>console.log("server is running on port :",PORT))



export default App;

