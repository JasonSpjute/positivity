import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { responsesService } from "../services/ResponsesService"

export class ResponsesController extends BaseController {
    constructor() {
        super('api')
        this.router
            .get('/responses', this.get)
            // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
            .post('/insults', this.postInsult)
            .post('/compliments', this.postCompliment)
            .use(Auth0Provider.getAuthorizedUserInfo)
    }

    async get(req, res, next) {
        try {
            return res.send(await responsesService.get())
        } catch (error) {
            next(error)
        }
    }

    async postInsult(req, res, next) {
        try {
            return res.send(await responsesService.postInsult(req.body))
        } catch (e) {
            next(e)
        }
    }
    async postCompliment(req, res, next) {
        try {
            return res.send(await responsesService.postCompliment(req.body))
        } catch (e) {
            next(e)
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