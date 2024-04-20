export class Post {
    id: string;
    createdAt: string;
    name: string;
    avatar: string;
    description: string;
    likes: number;
    image: string;
    comments: number;
    liked: boolean;
    saved: boolean;
    location: string;

    constructor(id: string, createdAt: string, name: string, avatar: string, description: string, likes:number, image: string, comments: number, liked: boolean, saved: boolean, location: string) {
        this.id = id;
        this.createdAt = createdAt;
        this.name = name;
        this.avatar = avatar;
        this.description = description;
        this.likes = likes;
        this.image = image;
        this.comments = comments;
        this.liked = liked;
        this.saved = saved;
        this.location = location;

    }
}