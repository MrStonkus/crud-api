import expres from "express"
import {
	getUsers,
	addUser,
	findUser,
	deleteUser,
	updateUser,
} from '../controlers/users.js'

const router = expres.Router()

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