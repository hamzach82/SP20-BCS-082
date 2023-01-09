import express from 'express'
import { body } from 'express-validator'

import { postCar, putCar, deleteCar, getCar } from '../controllers/car.controller.js'

const router = express.Router()

router.get('/car', getCar)
router.post('/car', postCar)
router.put('/update-car', putCar)
router.delete('/delete-car', deleteCar)

export { router as carRoutes }
