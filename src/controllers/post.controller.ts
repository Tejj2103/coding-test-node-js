import { Router, Request, Response } from "express";
import Post from "../common/common";
import PostsService from "../services/post.service";

class PostsController {
  public path = '/posts';
  public subPath = this.path + "/post/:id/";
  public router = Router();
  public srvPost: PostsService = new PostsService();

  constructor() {
    this.intializeRoutes();
    this.srvPost = new PostsService();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
    this.router.put(this.subPath, this.updatePost);
    this.router.delete(this.subPath, this.deletePost);
  }

  getAllPosts = async (request: Request, response: Response) => {
    try {
      let res = await this.srvPost.getAllPosts(request);
      response.send(res);
    } catch (err) {
      response.send(err);
    }
  }

  createAPost = async (request: Request, response: Response) => {
    const post: Post = request.body;
    try {
      let res = await this.srvPost.createPost(post);
      response.send(res);;
    } catch (err) {
      response.send(err);
    }
  }

  updatePost = async (request: Request, response: Response) => {
    const post: Post = request.body;
    post.id = Number(request.params.id);
    try {
      let res = await this.srvPost.updatePost(post);
      response.send(res);;
    } catch (err) {
      response.send(err);
    }
  }

  deletePost = async (request: Request, response: Response) => {
    const id: number = Number(request.params.id);
    try {
      let res = await this.srvPost.deletePost(id);
      response.send(res);;
    } catch (err) {
      response.send(err);
    }
  }
}

export default PostsController;