export default class Post {
    constructor({ id, URL, authorId, voteCount, author, authName }, comments, responses) {
        this.id = id
        this.URL = URL
        this.authorId = authorId
        this.voteCount = voteCount
        this.comments = comments
        this.authorName = authName || author.name
        if (responses) {
            this.insult = responses.insult
            this.compliment = responses.compliment
        }
        console.log(this.URL)
    }

    get Template() {
        let template = `
    <div class="card post">
      <div class="card-header text-right">
      ${this.voteCount}
        <i class="far fa-arrow-alt-circle-up fa-3x one icon" onclick="app.postsController.vote(true, '${this.id}')"></i> <i class="far fa-arrow-alt-circle-down fa-3x two icon" onclick="app.postsController.vote(false, '${this.id}')"></i>
      </div>
      <img class="card-img-top" src="${this.URL}" alt="">
      <button class="btn btn-success" onclick="app.commentsController.addComment('${this.insult}', '${this.id}')">${this.insult}</button>
    <div class="card-body" id="comments"></div>
    </div>
    `

        this.comments.forEach(c => template += c.Template)

        return template
    }
}