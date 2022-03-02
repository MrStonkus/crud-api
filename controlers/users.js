import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'

const dirDB = './database/users.json'

// create new DB file if not exist
export const checkDBFile = () => {
	if (!fs.existsSync(dirDB)) {
		const users = []
		let data = JSON.stringify(users)
		fs.writeFile(dirDB, data, function (err) {
			if (err) {
				console.log(err)
			}
			console.log('The new database file "users.json" was created!')
		})
	} else {
		console.log('The file exist!')
	}
}


// load users database
const _getUsersDB = () => {
	let rawData = fs.readFileSync(dirDB, 'utf8', (err) => {
		if (err) throw err
		 
	})
	return JSON.parse(rawData)
}


const _writeUsersToDB = (users) => {
	let data = JSON.stringify(users, null, 2)
	fs.writeFile(dirDB, data, (err) => {
		if (err) throw err
		console.log('Data written to file')
	})
}

export const getUsers = (req, res) => {
	const users = _getUsersDB()
	res.send(users)
}

export const addUser = (req, res) => {
	let users = _getUsersDB()
	users.push({ id: uuidv4(), ...req.body }) // add id
	res.send(req.body)
	_writeUsersToDB(users)
}

export const findUser = (req, res) => {
	const { id } = req.params
	let users = _getUsersDB()
	const user = users.find((user) => user.id === id)
	if (user) {
		const userStr = JSON.stringify(user, null, 4)
		res.send(`Success, user found: ${userStr}`)
	} else {
		res.send(`User with id: ${id} not found`)
	}
}

export const deleteUser = (req, res) => {
	const { id } = req.params
	let users = _getUsersDB()
	if (users.find(user => user.id === id)) {
		users = users.filter((user) => user.id !== id)
		_writeUsersToDB(users)
		res.send(`Success, user with id: ${id} deleted`)
	} else {
		res.send(`Error, user with id: ${id} not found`)
	}
}

export const updateUser = (req, res) => {
	const {id} = req.params
	const { name, lastName, age } = req.body
	
	let users = _getUsersDB()
	const user = users.find(user => user.id === id)
	if (user) {
		if (name) user.name = name
		if (lastName) user.lastname = lastName
		if (age) user.age = age
		_writeUsersToDB(users)
		res.send(`Success, user with id: ${id} updated`)
	} else {
		res.send(`Error, user with id: ${id} not found`)
	}
}