import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Comment = new Schema({
    content: { type: String, required: true },
    authorId: { type: String, ref: 'Account', required: true },
    postId: { type: String, required: true },
    voteCount: { type: Number, default: 0 }
}, { timestamps: true, toJSON: { virtuals: true } })

Comment.virtual('author', {
    localField: 'authorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})

export default Comment