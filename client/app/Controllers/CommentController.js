import { ProxyState } from "../AppState.js";
import { commentService } from "../Services/CommentService.js";

//Private
function _draw() {
  let comments = ProxyState.comments;
  console.log(comments);
  let template = ''
  comments.forEach(comment =>{
    template += comment.Template
  })
  document.getElementById('comment').innerHTML = template
}

//Public
export default class ValuesController {
  constructor() {
    ProxyState.on("comments", _draw);
    _draw()
  }
  getComment(id) {
    try {
      commentService.getComment(id)
    } catch (error) {
      console.error(error);
    }
  }
  addComment() {
    window.event.preventDefault();
    let newComment = {

    }
    try {
      commentService.addComment()
    } catch (error) {
      console.error(error);
    }
  }
  deleteComment(id) {
    try {
      commentService.deleteComment(id)
    } catch (error) {
      console.error(error);
    }
  }

  getComments(){
    try {
      commentService.getComments()
    } catch (error) {
      console.error(error)
    }
  }
  editComment(voteCount) {
    try {
      commentService.editComment(voteCount)
    } catch (error) {
      console.error(error);
    }
  }

}