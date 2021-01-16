import { AuthController } from "./Controllers/AuthController.js";
import ValuesController from "./Controllers/ValuesController.js";
import PostsController from "./Controllers/PostsController.js";
import CommentsController from "./Controllers/CommentController.js";

class App {
    authController = new AuthController();
    valuesController = new ValuesController();

    postsController = new PostsController();

    commentsController = new CommentsController();


}

window["app"] = new App();