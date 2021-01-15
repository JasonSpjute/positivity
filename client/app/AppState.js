import Post from "./Models/Post.js"
import Comment from "./Models/Comment.js"

import { EventEmitter } from './Utils/EventEmitter.js'
import { isValidProp } from './Utils/isValidProp.js'

class AppState extends EventEmitter {
  user = {}
  account = {}
  posts = [new Post({URL:'https://upload.wikimedia.org/wikipedia/commons/b/b7/Lueg_im_SWR1_Studio.jpg'})]

  /** @type {Comment[]} */
  comments = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
