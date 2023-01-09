import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
	name: String,
	manufacturingCompany: String,
	carId: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: 'Car',
	},
	quantity: Number,
})

const Product = mongoose.model('Product', productSchema)

export default Product
