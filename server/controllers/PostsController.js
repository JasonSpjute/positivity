import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { postsService } from "../services/PostsService"
import { commentsService } from "../services/CommentsService"


export class PostsController extends BaseController {
    constructor() {
        super('api/posts')
        this.router
            .get('', this.getAll)
            .get('/:id/comments', this.getComments)
            // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.create)
            .delete('/:id', this.remove)
            .put("/:id", this.edit)
    }

    async getAll(req, res, next) {
        try {
            return res.send(await postsService.getAll(req.query))
        } catch (error) {
            next(error)
        }
    }
    async getComments(req, res, next) {
        try {
            return res.send(await commentsService.getAll({ postId: req.params.id }))
        } catch (e) {
            next(e)
        }
    }

    async create(req, res, next) {
        try {
            // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
            req.body.authorId = req.userInfo.id
            res.send(await postsService.create(req.body))
        } catch (error) {
            next(error)
        }
    }
    async remove(req, res, next) {
        try {
            res.send(await postsService.remove(req.params.id, req.userInfo.id))
        } catch (e) {
            next(e)
        }
    }
    async edit(req, res, next) {
        try {
            req.body.authorId = req.userInfo.id
            req.body.id = req.params.id
            res.send(await postsService.edit(req.body))
        } catch (e) {
            next(e)
        }
    }
}