import mongoose from 'mongoose'

const productCompanySchema = new mongoose.Schema({
	name: String,
})

export default mongoose.model('ProductCompany', productCompanySchema)
