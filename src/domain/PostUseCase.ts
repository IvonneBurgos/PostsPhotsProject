import { Post } from "./Post";
import { PostRepository } from "./PostRepository";

export class PostUseCases {
    postRepository: PostRepository;

    constructor(postRepository: PostRepository){
        this.postRepository  = postRepository;
    }

    async getPosts() : Promise<Post[]> {
        return this.postRepository.getPosts();
    }
}