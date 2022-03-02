import express from "express"
import userRoutes from './routes/users.js'

const app = express()
const PORT = 3000

// app.use(cors())

app.use(express.json())

// routers
app.use('/users', userRoutes)

app.get('/', (req, res) => res.send('Hello from server'))


app.listen(PORT, () => console.log(`listening on port http://localhost:${PORT}`))
