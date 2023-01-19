import express, { Request, Response } from 'express'


const usersRoute = express.Router();


usersRoute.get('/users', (req:Request, res:Response) => {
    res.send('Finally on track!')
    })

usersRoute.post('/users', (req:Request, res:Response) => {
	res.send('Post request on users!')
})

usersRoute.patch('/users', (req:Request, res:Response) => {
	res.send('Patch request on users!')
})

usersRoute.delete('/users', (req:Request, res:Response) => {
	res.send('Delete request on users!')
})


export default usersRoute


