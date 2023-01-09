import Price from "../models/Price.model.js"

export const postPrice = async (req, res, next) => {
	const productId = req.body.productId
	const productPrice = +req.body.price

	const price = new Price({productId, price: productPrice})
	// console.log(product)
	try {
		await price.save()

		//* return response
		return res.status(201).json({ message: 'price added successfully' })
	} catch (error) {
		next(error)
	}
}

export const putPrice = async (req, res, next) => {

	const priceId = req.body.priceId
	const price = +req.body.price

	try {
		await Price.updateOne(
			{ _id: priceId },
			{ $set: { price } }
		)

		//* return response
		return res.status(200).json({ message: 'product updated successfully' })
	} catch (error) {
		next(error)
	}
}

export const deletePrice = async (req, res, next) => {
	const priceId = req.body.priceId

	try {
    //just changing the status of the product to delete
		await Price.updateOne(
			{ _id: priceId },
			{ $set: { delete: true } }
		)

		//* return response
		return res.status(200).json({ message: 'product deleted successfully' })
	} catch (error) {
		next(error)
	}
}
