import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import { carRoutes } from './api/routes/car.routes.js'
import { productRoutes } from './api/routes/product.routes.js'
import { priceRoutes } from './api/routes/price.routes.js'
import { orderRoutes } from './api/routes/order.routes.js'

const app = express()

app.use(bodyParser.json())

//Prevention from cros error
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
	next()
})

//? Routes
app.use(carRoutes)
app.use(productRoutes)
app.use(priceRoutes)
app.use(orderRoutes)

//? Express Error Middleware
app.use((error, req, res, next) => {
	console.log('in express error middleware', error, 'in the end')
	const status = error.status || 500
	const message = error.message || 'server internal error'

	res.status(status).json({ status: 'error', message: message })
})

const uri = `mongodb+srv://hamzach:${process.env.MONGODB_USER_PASSWORDS}@cluster0.5oui6.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(uri, { dbName: 'pos' }, () => console.log('mongodb connected'))

app.listen(8080)
