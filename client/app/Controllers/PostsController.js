import { ProxyState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";

//Private
function _draw() {
    let posts = ProxyState.posts;
    let template = ''
    posts.forEach(post => {
        template += `
        <div class="my-3">
        `
        template += post.Template

        template += `</div>`
    })
    document.getElementById('post').innerHTML = template
}

//Public
export default class PostsController {
    constructor() {
        ProxyState.on("posts", _draw);
        postsService.getAll()
        _draw()
    }

    getPost(id) {
        try {
            postsService.getPost(id)
        } catch (error) {
            console.error(error);
        }
    }

    createPost(e) {
        e.preventDefault()
        var form = e.target;
        var post = {
            URL: form["URL"].target,
        }
        try {
            postsService.createPost(post)
        } catch (error) {
            console.error(error)
        }
        form.reset()

    }

    removePost(id) {
        try {
            postsService.deletePost(id)
        } catch (error) {
            console.error(error);
        }
    }

}