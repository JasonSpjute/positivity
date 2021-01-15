export default class Post {
  constructor({URL, authorId , content}) {
    this.URL = URL
    this.authorId = authorId
    this.content = content
  }

  get Template() {
    return `
    <div class="card">
    <img class="card-img-top" src="${this.URL}" alt="">
    <div class="card-body" id="comments">
    ${this.authorId} comments ${this.content}
    </div>
    </div>
    `
  }
}
