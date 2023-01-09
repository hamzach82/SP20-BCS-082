import Product from '../models/Product.model.js'

export const getProduct = async (req, res, next) => {

	try {
		const result = await Product.find({}).populate('carId')

		//* return response
		return res.status(200).json({ message: 'data fetched successfully', data: result })
	} catch (error) {
		next(error)
	}
}

export const postProduct = async (req, res, next) => {
	const name = req.body.name
	const company = req.body.company
	const carId = req.body.carId

	const product = new Product({ name, company, carId })
	// console.log(product)
	try {
		await product.save()

		//* return response
		return res.status(201).json({ message: 'product added successfully' })
	} catch (error) {
		next(error)
	}
}

export const putProduct = async (req, res, next) => {
	const productId = req.body.productId
	const name = req.body.name
	const company = req.body.company
	const carId = req.body.carId
	const quantity = +req.body.quantity

	try {
		await Product.updateOne(
			{ _id: productId },
			{ $set: { name, company, carId, quantity } }
		)

		//* return response
		return res.status(200).json({ message: 'product updated successfully' })
	} catch (error) {
		next(error)
	}
}

export const deleteProduct = async (req, res, next) => {
	const productId = req.body.productId

	try {
    //just changing the status of the product to delete
		await Product.deleteOne(
			{ _id: productId },
		)

		//* return response
		return res.status(200).json({ message: 'product deleted successfully' })
	} catch (error) {
		next(error)
	}
}
