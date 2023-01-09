import Car from '../models/Car.model.js'

export const getCar = async (req, res, next) => {

	try {
		const result = await Car.find({})

		//* return response
		return res.status(201).json({ message: 'data fetched successfully', data: result })
	} catch (error) {
		next(error)
	}
}
export const postCar = async (req, res, next) => {
	const name = req.body.name
	const company = req.body.company
	const model = req.body.model

	const car = new Car({ name, company, model })
	console.log(car)
	try {
		await car.save()

		//* return response
		return res.status(201).json({ message: 'Car added successfully' })
	} catch (error) {
		next(error)
	}
}

export const putCar = async (req, res, next) => {
	const carId = req.body.id
	const name = req.body.name
	const company = req.body.company
	const model = req.body.model

	try {
		await Car.updateOne({ _id: carId }, { $set: { name, company, model } })

		//* return response
		return res.status(201).json({ message: 'Car updated successfully' })
	} catch (error) {
		next(error)
	}
}

export const deleteCar = async (req, res, next) => {
	const carId = req.body.id
	console.log(carId)
	try {
		const result = await Car.deleteOne({ _id: carId })
		console.log(result)
		//* return response
		return res.status(201).json({ message: 'Car deleted successfully' })
	} catch (error) {
		next(error)
	}
}
