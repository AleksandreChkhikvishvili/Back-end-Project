import mongoose from 'mongoose'

const countrySchema = new mongoose.Schema({
    name: String,
    capital: String,
    region: String,
    population: Number,
    flag: String,
    primaryLanguage: String,
})

export default mongoose.model('countries', countrySchema)