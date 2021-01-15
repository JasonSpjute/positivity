import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CommentsService {
    async getAll(query) {
        return await dbContext.Comments.find(query).populate('author', 'name id')
    }

    async create(body) {
        const newComment = await dbContext.Comments.create(body)
        if (!newComment) {
            throw new BadRequest('Comment could not be created')
        }
        return newComment
    }

    async edit(body) {
        const post = await dbContext.Comments.find({ id: body.id }).populate('author', 'name id')

        if (!post) {
            throw new BadRequest("This comment does not exist, or you do not have permission to edit it.")
        }
        return post
    }

}

export const commentsService = new CommentsService()