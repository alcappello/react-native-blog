import React, {useState} from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";

const BlogPostForm = ({initialTitle, initialContent, onSubmit}) => {

    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);

    return (
        <View>
            <Text style={styles.label}>Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle} autoCorrect={false}/>
            <Text style={styles.label}>Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={setContent} autoCorrect={false}/>
            <Button title='Save Blog Post' onPress={() => onSubmit(title, content)}/>
        </View>
    )
};

BlogPostForm.defaultProps = {
    initialTitle: '',
    initialContent: ''
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default BlogPostForm;