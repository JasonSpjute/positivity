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
        let template = `<div class="card post">
            <div class="card-header text-right header">
              <i class="far fa-arrow-alt-circle-up fa-3x one icon" onclick=""></i>  
              <h3 class="d-inline text-white mx-2 tex-center">${this.voteCount}</h3> 
              <i class="far fa-arrow-alt-circle-down fa-3x two icon" onclick=""></i>
            </div>
            <div class="row">
            <div class="col"></div>
            <div class = "col-12">
            <img class="card-img-top pic pb-3" src="${this.URL}" alt="">
            </div>
            <div class = "col"></div>
            </div>
          <div class="card-body">
          <button id="mean" type="button" onclick="app.commentController.getComments()" class="btn btn-primary btn-lg btn-block">${this.compliment}</button>
          <div class="text-center or"><b> -OR- </b></div>
      <button type="button" class="btn btn-primary btn-lg btn-block">${this.insult}</button>
          </div>
          </div>
          `


        this.comments.forEach(c => template += c.Template)

        return template
    }
}


// <div class="card post">
//       <div class="card-header text-right">
//       ${this.voteCount}
//         <i class="far fa-arrow-alt-circle-up fa-3x one icon" onclick="app.postsController.vote(true, '${this.id}')"></i> <i class="far fa-arrow-alt-circle-down fa-3x two icon" onclick="app.postsController.vote(false, '${this.id}')"></i>
//       </div>
//       <img class="card-img-top" src="${this.URL}" alt="">
//       <button class="btn btn-success" onclick="app.commentsController.addComment('${this.insult}', '${this.id}')">${this.insult}</button>
//     <div class="card-body" id="comments"></div>
//     </div>
//     `