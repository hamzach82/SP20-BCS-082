import express from 'express'


import { deletePrice, postPrice, putPrice } from '../controllers/price.controller.js'

const router = express.Router()

// router.get('/price', )
router.post('/price', postPrice)
router.put('/update-price', putPrice)
router.delete('/delete-price', deletePrice)

export { router as priceRoutes }
