import { ProxyState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";

//Private
function _draw() {
  let posts = ProxyState.posts;
  console.log(posts);
  let template = ''
  posts.forEach(post =>{
    template += post.Template
  })
  document.getElementById('post').innerHTML = template
}

//Public
export default class PostsController {
  constructor() {
    ProxyState.on("posts", _draw);
    _draw()
  }

  createPost() {
    try {
      postsService.createPost()
    } catch (error) {
      console.error(error)
    }
   
  }

}