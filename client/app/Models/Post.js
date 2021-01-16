export default class Post {
    constructor({ id, URL, authorId, voteCount }, comments) {
        this.id = id
        this.URL = URL
        this.authorId = authorId
        this.voteCount = voteCount
        this.comments = comments

        console.log(this.URL)
    }

    get Template() {
        let template = `
    <div class="card post">
      <div class="card-header text-right">
        <i class="far fa-arrow-alt-circle-up fa-3x one icon" onclick=""></i> <i class="far fa-arrow-alt-circle-down fa-3x two icon" onclick=""></i>
      </div>
      <img class="card-img-top" src="${this.URL}" alt="">
    <div class="card-body" id="comments"></div>
    </div>
    `

        this.comments.forEach(c => template += c.Template)

        return template
    }
}