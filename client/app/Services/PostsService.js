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
                let comments = ax.data.map(c => new Comment(c))
                posts.push(new Post(res.data[i], comments))
            }
            ProxyState.posts = posts
        } catch (error) {
            console.error(error)
        }
    }
    async deletePost(id) {
        try {
            // REVIEW does this fail if the api call fails?
            let res = await api.delete("/posts" + id)
            ProxyState.posts = ProxyState.posts.filter(p => p.id != id)
        } catch (error) {
            console.error(error);
        }
    }
    async createPost(authorId, URL) {
        try {
            let res = await api.post("/posts", )
            ProxyState.posts = [...ProxyState.posts, new Post(res.data)]
        } catch (error) {
            console.error(error);
        }
    }
    async getPost(id) {
        try {
            let res = await api.get("/posts" + id)
            let post = await ProxyState.posts.find(p => p.id == id)
        } catch (error) {
            console.error(error)
        }
    }


}








export const postsService = new PostService();