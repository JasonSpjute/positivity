import { ProxyState } from "../AppState.js";
import Post from "../Models/Post.js";
import { api } from "./AxiosService.js";

class PostService{
   async deletePost(id) {
    try {
      let res = await api.delete("/posts" + id)
      ProxyState.posts = ProxyState.posts.filter(p => p.id != id)
    } catch (error) {
      console.error(error);
    }
  }
  async createPost(authorId, URL) {
    try {
      let res = await api.post("/posts",  )
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