import express from 'express'


import { deleteProduct, getProduct, postProduct, putProduct } from '../controllers/product.controller.js'

const router = express.Router()

router.get('/product', getProduct)
router.post('/product', postProduct)
router.put('/update-product', putProduct)
router.delete('/delete-product', deleteProduct)

export { router as productRoutes }
