import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import PostSchema from "../models/Post"
import CommentSchema from "../models/Comment"
import InsultSchema from "../models/Insult"
import ComplimentSchema from "../models/Compliment"


class DbContext {
    Values = mongoose.model('Value', ValueSchema);
    Account = mongoose.model('Account', AccountSchema);
    Posts = mongoose.model('Post', PostSchema);
    Comments = mongoose.model('Comment', CommentSchema);
    Insults = mongoose.model('Insult', InsultSchema)
    Compliments = mongoose.model('Compliment', ComplimentSchema)
}

export const dbContext = new DbContext()