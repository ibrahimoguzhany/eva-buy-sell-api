const db = require('../models')
const User = db.evabuysell.models.user

exports.getUser = async (req, res) => {
    res.send({
        message: 'This is working!'
    })
}
