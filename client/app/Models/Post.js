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

    }

    get Template() {
        let template = `<div class="card post">
            <div class="card-header text-right header">
              <i onclick="app.postsController.vote(true, '${this.id}')" class="far fa-arrow-alt-circle-up fa-3x one icon" onclick=""></i>  
              <h3 class="d-inline text-white mx-2">${this.voteCount}</h3> 
              <i onclick="app.postsController.vote(false, '${this.id}')" class="far fa-arrow-alt-circle-down fa-3x two icon" onclick=""></i>
            </div>
            <div class="row">
            <div class="col"></div>
            <div class = "col-12">
            <img class="card-img-top pic pb-3" src="${this.URL}" alt="">
            </div>
            <div class = "col"></div>
            </div>
          <div class="card-body" id="comments">
          <button onclick="app.commentsController.addComment('${this.compliment}', '${this.id}')" id="mean" type="button" class="btn btn-primary btn-lg btn-block">${this.compliment}</button>
          <div class="text-center or"><b> -OR- </b></div>
      <button onclick="app.commentsController.addComment('${this.insult}', '${this.id}')" type="button" class="btn btn-primary btn-lg btn-block">${this.insult}</button>
          </div>
          </div>
          `


        this.comments.forEach(c => template += c.Template)

        return template
    }
}