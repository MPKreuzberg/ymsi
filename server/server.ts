import express from 'express'



const app = express()
const port = 4000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from users!')
    })
    


app.listen(port, () => {
    console.log(`Forum backend listening on port ${port}!`);
  });
  