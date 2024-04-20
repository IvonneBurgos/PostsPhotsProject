import React, { useState, useEffect } from 'react';
import { Post } from '../domain/Post';
import getPosts from '../presenter/PostPresenter';

function usePost() {
    const [posts, setPosts] = useState<Post[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getAllPosts = async () => {
            const allPosts = await getPosts();
            setPosts(allPosts);
            setLoading(false);
        };
        getAllPosts();
    }, []);

    return { posts, loading};
}

export default usePost;
