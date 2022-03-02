import expres from "express"
import {
	checkDBFile,
	getUsers,
	addUser,
	findUser,
	deleteUser,
	updateUser,
} from '../controlers/users.js'

const router = expres.Router()

// create new DB file if not exist
checkDBFile()

// get all users
router.get('/', getUsers)

// add new user
router.post('/', addUser)

// find user by its id
router.get('/:id', findUser)

// delete user by id
router.delete('/:id', deleteUser)

// update user by id
router.patch('/:id', updateUser)


export default router