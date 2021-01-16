import { ProxyState } from "../AppState.js";
import Comment from "../Models/Comment.js";
import { api } from "./AxiosService.js";

class CommentService {
    async getComments() {
            let res = await api.get("/comments")
            ProxyState.comments = res.data.map(c => new Comment(c))
        }
        // async editComment(voteCount) {
        //   let res = await api.put("comments" + )
        // }

    // async addComment(newComment) {
    //   let res = await api.post("/comments" newComment )
    // }
    async getComment(id) {
        let res = await api.get("/comments" + id)
        let comment = await ProxyState.comments.find(c => c.id == id)
    }
    async deleteComment(id) {
        let res = await api.delete("/posts" + id)
        ProxyState.posts = ProxyState.posts.filter(p => p.id != id)

    }
    async vote(inVote, id) {
        console.log(inVote)
        let res = await api.put(`/comments/${id}`, { vote: inVote })
        console.log(res);
    }


}
export const commentService = new CommentService();