import { ProxyState } from "../AppState.js";
import Post from "../Models/Post.js";
import { api } from "./AxiosService.js";
import Comment from "../Models/Comment.js"

class PostService {

    async getAll() {
        try {
            let res = await api.get('/posts')
            let posts = []
            for (let i = 0; i < res.data.length; i++) {
                let ax = await api.get(`/posts/${res.data[i].id}/comments`)
                let responses = await api.get('/responses')
                let comments = ax.data.map(c => new Comment(c))
                posts.push(new Post(res.data[i], comments, responses.data))
            }
            ProxyState.posts = posts
            console.log(posts);
        } catch (error) {
            console.error(error)
        }
    }
    async deletePost(id) {
        try {
            let res = await api.delete("/posts" + id)
            ProxyState.posts = ProxyState.posts.filter(p => p.id != id)
        } catch (error) {
            console.error(error);
        }
    }
    async createPost(post) {
        let res = await api.post("/posts", post)
        res.data['authName'] = ProxyState.account.name

        ProxyState.posts = [...ProxyState.posts, new Post(res.data, [])]
    }

    async getPost(id) {
        try {
            let res = await api.get("/posts" + id)
            let post = await ProxyState.posts.find(p => p.id == id)
        } catch (error) {
            console.error(error)
        }
    }

    async vote(inVote, id) {
        let res = await api.put(`/posts/${id}`, { vote: inVote })
        ProxyState.posts.find(p => p.id == id).voteCount = res.data.voteCount
        ProxyState.posts = ProxyState.posts

    }


}








export const postsService = new PostService();