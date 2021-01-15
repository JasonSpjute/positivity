import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class PostsService {
    async getAll(query = {}) {
        return await dbContext.Posts.find(query).populate('author', 'name id')
    }
    async create(body) {
        return await dbContext.Posts.create(body)
    }
    async remove(postId, userId) {
        const post = await dbContext.Posts.findOneAndRemove({ _id: postId, authorId: userId })
        if (!post) {
            throw new BadRequest('You are not the creator, or this is an invalid post.')
        }
        return "Post Deleted."
    }
    async edit(body) {
        const post = await dbContext.Posts.findOneAndUpdate({ _id: body.id, authorId: body.authorId }, body, { new: true }).populate('author', 'name id')
        if (!post) {
            throw new BadRequest('You are not the creator, or this is an invalid post.')
        }
        return post
    }
    async findById(id) {
        const value = await dbContext.Values.findById(id)
        if (!value) {
            throw new BadRequest('Invalid Id')
        }
        return value
    }
}

export const postsService = new PostsService()