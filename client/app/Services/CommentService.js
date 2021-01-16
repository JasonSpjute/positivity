import { ProxyState } from "../AppState.js";
import Comment from "../Models/Comment.js";
import { api } from "./AxiosService.js";
import { postsService } from "../Services/PostsService.js"
class CommentService {
    async getComments() {
            let res = await api.get("/comments")
            ProxyState.comments = res.data.map(c => new Comment(c))
        }
        // async editComment(voteCount) {
        //   let res = await api.put("comments" + )
        // }

    async addComment(comment, id) {
        let res = await api.post('/comments', {
            content: comment,
            postId: id
        })
        postsService.getAll()
    }
    async getComment(id) {
        let res = await api.get("/comments" + id)
        let comment = await ProxyState.comments.find(c => c.id == id)
    }
    async deleteComment(id) {
        let res = await api.delete("/posts" + id)
        ProxyState.posts = ProxyState.posts.filter(p => p.id != id)

    }
    async vote(inVote, id) {
        let res = await api.put(`/comments/${id}`, { vote: inVote })
        ProxyState.posts.find(p => p.id == res.data.postId).comments.find(c => c.id == id).voteCount = res.data.voteCount
        ProxyState.posts = ProxyState.posts
        console.log(res.data.voteCount)
    }


}
export const commentService = new CommentService();