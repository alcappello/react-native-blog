import React, {useContext} from 'react';
import {Context} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({navigation}) => {
    const id = navigation.getParam('id');

    const {state} = useContext(Context);
    const blogPost = state.find(post => post.id === id);

    const {editBlogPost} = useContext(Context);

    const callback = async (title, content) => {
        await editBlogPost(id, title, content);
        navigation.navigate('Show', {id});
    };

    return (
        <BlogPostForm initialTitle={blogPost.title} initialContent={blogPost.content} onSubmit={callback} />
    )
};


export default CreateScreen;