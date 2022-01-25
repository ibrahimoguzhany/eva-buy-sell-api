const db = require('../models')
const User = db.evabuysell.models.user

exports.getUser = async (req, res) => {
    const { id } = req.params
    const user = await User.findOne({
        where: {
            id
        }
    })
    if (!user) {
        return res.status(400).send({
            message:
                `No user found with Id ${id}`
        })
    }
    return res.send(user)
}

exports.createUser = async (req, res) => {

    const { username } = req.body

    console.log(username)

    if (!username) {
        return res.status(400).send({
            message: 'Please provide a username'
        })
    }

    let userNameExists = await User.findOne({ where: { username } })
    if (userNameExists) {
        return res.status(400).send({
            message: `A user with username ${username} already exists`
        })
    }
    try {
        let newUser = await User.create({
            username
        })
        return res.send(newUser)
    } catch (err) {
        return res.status(500).send({ message: `Error ${err.message}` })
    }
}
