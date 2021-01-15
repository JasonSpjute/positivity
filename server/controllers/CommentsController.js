import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { postsService } from "../services/PostsService"
import { commentsService } from "../services/CommentsService"

export class CommentsController extends BaseController {
    constructor() {
        super('api/comments')
        this.router
            // .get('', this.getAll)
            // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.create)
            .put('/:id', this.edit)
    }

    async create(req, res, next) {
        try {
            // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
            req.body.authorId = req.userInfo.id
            res.send(await commentsService.create(req.body))
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next) {
        try {
            req.body.userId = req.userInfo.id
            res.send(await commentsService.edit(req.body))
        } catch (e) {
            next(e)
        }
    }
}