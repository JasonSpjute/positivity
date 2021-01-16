import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Post = new Schema({
    URL: { type: String, required: true },
    authorId: { type: String, ref: 'Account', required: true },
    voteCount: { type: Number, default: 0 }
}, { timestamps: true, toJSON: { virtuals: true } })

Post.virtual('author', {
    localField: 'authorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})

export default Post