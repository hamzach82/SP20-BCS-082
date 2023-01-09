import mongoose from 'mongoose'

const carSchema = new mongoose.Schema({
	name: String,
	company: String,
	model: String,
})

const Car = mongoose.model('Car', carSchema)

export default Car
