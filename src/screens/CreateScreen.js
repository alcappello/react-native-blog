import React, {useContext} from 'react';
import {Context} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({navigation}) => {

    const {addBlogPost} = useContext(Context);

    const callback = async (title, content) => {
        await addBlogPost(title, content);
        navigation.navigate('Index')
    };

    return (
        <BlogPostForm onSubmit={callback} />
    )
};


export default CreateScreen;