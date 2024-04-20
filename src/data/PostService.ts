import { Post } from "../domain/Post";
import { PostRepository } from "../domain/PostRepository";

import axios from 'axios';
const baseUrl = 'https://662029f13bf790e070af2cd8.mockapi.io/api/v1/posts';

export class PostRepositoryService implements PostRepository {
    async getPosts(): Promise<Post[]> {
      var posts: Post[] = []
       return axios<Post[]>({
            method: 'get',
            url: baseUrl,
          }).then((response) => {
            posts = response.data
            return posts
          }).catch((error)=>{
            throw new Error(error)
          });
    }
}