import { PostUseCases } from "../domain/PostUseCase";
import { PostRepositoryService } from "../data/PostService";

let postRepository = new PostRepositoryService();
let postUseCase = new PostUseCases(postRepository);
function getPosts() {
    return postUseCase.getPosts();
}
export default getPosts;