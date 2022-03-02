import { v4 as uuidv4 } from 'uuid'

let users = []

export const getUsers = (req, res) => {
	console.log(users)
	res.send(users)
}

export const addUser = (req, res) => {
	users.push({ id: uuidv4(), ...req.body }) // add id
	res.send(req.body)
}

export const findUser = (req, res) => {
	const { id } = req.params
	const foundUser = users.find((user) => user.id === id)

	const results = foundUser ? foundUser : 'No users with this id'
	res.send(results)
}

export const deleteUser = (req, res) => {
	const { id } = req.params
	users = users.filter((user) => user.id !== id)

	res.send('User deleted')
}

export const updateUser = (req, res) => {
	const {id} = req.params
	const { name, lastName, age } = req.body
	
	const user = users.find(user => user.id === id)
	
	if (name) user.name = name
	if (lastName) user.lastname = lastName
	if (age) user.age = age

	res.send('User updated')
}