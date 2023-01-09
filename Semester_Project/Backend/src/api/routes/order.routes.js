import express from 'express'


import { deleteOrder, getOrder, postOrder, putOrder } from '../controllers/order.controller.js'


const router = express.Router()

router.get('/order', getOrder)
router.post('/order', postOrder)
router.put('/update-order', putOrder)
router.delete('/delete-order', deleteOrder)

export { router as orderRoutes }
