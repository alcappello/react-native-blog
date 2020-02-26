import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    let id, title, content;

    switch (action.type) {
        case 'add_blog_post':
            ({title, content} = action.payload);
            return [...state, {id: Math.floor(Math.random() * 999) + '', title, content}];

        case 'edit_blog_post':
            ({id, title, content} = action.payload);
            return state.map(post => post.id === id ? action.payload : post);

        case 'delete_blog_post':
            return state.filter(post => post.id !== action.payload);
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return (title, content) => {
        dispatch({type: 'add_blog_post', payload: {title, content}});
    };
};

const editBlogPost = (dispatch) => {
    return (id, title, content) => {
        dispatch({type: 'edit_blog_post', payload: {id, title, content}});
    }
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_blog_post', payload: id})
    }
};

export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost, editBlogPost, deleteBlogPost}, [{
    id: '1',
    title: 'First',
    content: 'Lorem ipsum sit dolor!'
}]);
