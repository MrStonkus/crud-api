import expres from "express"

const router = expres.Router()

router.get('/', (req, res) => res.send("Hello from users"))

export default router