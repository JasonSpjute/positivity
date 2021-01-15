import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class ResponsesService {
    async get() {
        let response = {}
        let ins = await dbContext.Insults.aggregate([{ $sample: { size: 1 } }])
        let comp = await dbContext.Compliments.aggregate([{ $sample: { size: 1 } }])
        response['insult'] = ins[0].content
        response['compliment'] = comp[0].content
        return response
    }

}

export const responsesService = new ResponsesService()