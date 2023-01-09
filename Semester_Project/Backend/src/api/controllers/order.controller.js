import Order from "../models/Order.model.js"

export const getOrder = async (req, res, next) => {

	// console.log(product)
	try {
		const result = await Order.find({}).populate('cart.productId').populate('cart.priceId')

		//* return response
		return res.status(200).json({ message: 'order added successfully', data: result })
	} catch (error) {
		next(error)
	}
}
export const postOrder = async (req, res, next) => {
	const customerName = req.body.customerName
	const cart = req.body.cart

  console.log(cart);

	const order = new Order({
    customerName,
    cart
  })
	// console.log(product)
	try {
		await order.save()

		//* return response
		return res.status(201).json({ message: 'order added successfully' })
	} catch (error) {
		next(error)
	}
}

export const putOrder = async (req, res, next) => {

	const orderId = req.body.orderId
	const cart = req.body.cart

	try {
		await Order.updateOne(
			{ _id: orderId },
			{ $set: { cart } }
		)

		//* return response
		return res.status(200).json({ message: 'product updated successfully' })
	} catch (error) {
		next(error)
	}
}

export const deleteOrder = async (req, res, next) => {
	const orderId = req.body.orderId

	try {
    //should introduce some backup table to preserve data
		await Order.deleteOne(
			{ _id: orderId }
		)

		//* return response
		return res.status(200).json({ message: 'product deleted successfully' })
	} catch (error) {
		next(error)
	}
}
