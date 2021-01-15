import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Compliment = new Schema({
    content: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } })


export default Compliment