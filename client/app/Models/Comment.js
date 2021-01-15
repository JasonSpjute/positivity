export default class Comment {
  constructor({authorId, postId, content, voteCount, id}) {
    this.authorId = authorId
    this.id = id
    this.postId = postId
    this.content = content
    this.voteCount = voteCount


  }

  get Template() {
    return `
    <p class="commentFont">${this.content} ${this.voteCount}</p>
    `
  }
}
