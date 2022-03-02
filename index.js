import express from "express"
import userRoutes from './routes/users.js'


const app = express()
const PORT = 3000

// this help get req.body as object
app.use(express.json())


// routers
app.get('/', (req, res) => res.send('Hello from server'))
app.use('/users', userRoutes)


app.listen(PORT, () => console.log(`listening on port http://localhost:${PORT}`))



