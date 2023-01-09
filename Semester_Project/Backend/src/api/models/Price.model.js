import mongoose from 'mongoose'

const priceSchema = new mongoose.Schema({
	productId: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: 'Product',
	},
	price: Number,
	createdAt: {
		type: Date,
		default: () => Date.now(),
	},
	delete: Boolean
})

const Price = mongoose.model('Price', priceSchema)

export default Price
