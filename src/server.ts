import App from './app/app';
import PostsController from './controllers/post.controller';

const app = new App([new PostsController()], 4000);

app.listen();