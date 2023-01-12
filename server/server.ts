import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import usersRoute from './routes/userRoutes'



dotenv.config()
const app = express()
const port = process.env.PORT || 80

app.use(morgan("dev"))



app.use(usersRoute)


 


app.listen(port, () => {
    console.log(`Forum backend is running on port ${port}!`);
  });

