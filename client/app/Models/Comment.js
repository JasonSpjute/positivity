export default class Comment {
    constructor({ authorId, postId, content, voteCount, id, author }) {
        this.authorId = authorId
        this.postId = postId
        this.content = content
        this.voteCount = voteCount
        this.id = id
        this.authorName = author.name
    }

    get Template() {
        return `
        <div class="card my-2">
        <div class="card-body">
        <div class="p-3 bg-white">
          <p class="commentFont">${this.content} ${this.voteCount} ${this.authorName}</p>
          <i class="far fa-arrow-alt-circle-up fa-2x one icon" onclick="app.commentsController.vote(true, '${this.id}')"></i> <i class="far fa-arrow-alt-circle-down fa-2x two icon" onclick="app.commentsController.vote(false, '${this.id}')"></i>
        </div>
    
        </div>
    </div>
    `
    }
}