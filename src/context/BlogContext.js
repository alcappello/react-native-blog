import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
    let id, title, content;

    switch (action.type) {
        case 'get_blog_posts':
            return action.payload;

        case 'edit_blog_post':
            ({id, title, content} = action.payload);
            return state.map(post => post.id === id ? action.payload : post);

        case 'delete_blog_post':
            return state.filter(post => post.id !== action.payload);
        default:
            return state;
    }
};

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        dispatch({type: 'get_blog_posts', payload: response.data});
    }
};

const addBlogPost = () => {
    return async (title, content) => {
        await jsonServer.post('/blogposts', {title, content});
    };
};

const editBlogPost = (dispatch) => {
    return async (id, title, content) => {
        await jsonServer.put(`/blogposts/${id}`, {title, content});
        dispatch({type: 'edit_blog_post', payload: {id, title, content}});
    }
};

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({type: 'delete_blog_post', payload: id});
    }
};

export const {Context, Provider} = createDataContext(blogReducer, {getBlogPosts, addBlogPost, editBlogPost, deleteBlogPost}, []);
