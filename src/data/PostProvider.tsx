import React, { ReactNode, createContext, useContext } from 'react';
import { Post } from '../domain/Post';
import usePost from './usePost';

interface PostContextType {
    posts: Post[] | null;
    loading: boolean;
}

export const PostContext = createContext<PostContextType | undefined>(undefined);

const PostProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { posts, loading } = usePost();

    return (
        <PostContext.Provider value={{ posts, loading }}>
            {children}
        </PostContext.Provider>
    );
};

export default PostProvider;

export const usePostContext = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error('useAuthContext debe ser utilizado dentro de un AuthProvider');
    }
    return context;
};







