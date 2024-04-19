import { Post } from "../domain/Post";
import { PostRepository } from "../domain/PostRepository";

import axios from 'axios';
const baseUrl = 'https://662029f13bf790e070af2cd8.mockapi.io/api/v1/posts';

export class PostRepositoryService implements PostRepository {
    async getPosts(): Promise<Post[]> {

        var posts: Post[] = []

        axios({
            method: 'get',
            url: baseUrl,
          }).then((response) => {
            console.log(response.data);
            posts = response.data as Post[]
          });

        return posts
    }
}