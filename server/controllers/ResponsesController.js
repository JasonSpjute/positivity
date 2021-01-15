import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { responsesService } from "../services/ResponsesService"

export class ResponsesController extends BaseController {
    constructor() {
        super('api/responses')
        this.router
            .get('', this.get)
            // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
            .use(Auth0Provider.getAuthorizedUserInfo)
    }

    async get(req, res, next) {
        try {
            return res.send(await responsesService.get())
        } catch (error) {
            next(error)
        }
    }

    // async create(req, res, next) {
    //     try {
    //         // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
    //         req.body.creatorId = req.userInfo.id
    //         res.send(req.body)
    //     } catch (error) {
    //         next(error)
    //     }
    // }
}