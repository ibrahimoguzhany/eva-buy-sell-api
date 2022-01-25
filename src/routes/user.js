import { Router } from 'express'
const user = require('../controllers/user.controller')
const router = Router()

// Routes for user
router.get('/:id', user.getUser)

router.post('/createUser', user.createUser)

export default router   