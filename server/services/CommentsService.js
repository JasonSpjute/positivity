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
        const post = await dbContext.Comments.findById(body.id)
        if(body.vote == true){
            // @ts-ignore
            post.voteCount ++
        } else{
            // @ts-ignore
            post.voteCount --
        }
        let res = await dbContext.Comments.findByIdAndUpdate(body.id, post, {new: true})
        if (!post) {
            throw new BadRequest("This comment does not exist, or you do not have permission to edit it.")
        }
        return res
    }

}

export const commentsService = new CommentsService()