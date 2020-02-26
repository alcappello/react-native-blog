import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Context} from "../context/BlogContext";
import {Feather} from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const {state, deleteBlogPost} = useContext(Context);

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(post) => post.id}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather style={styles.icon} name="trash"/>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
};

IndexScreen.navigationOptions = ({navigation}) => ({
    headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather size={30} name="plus"/>
        </TouchableOpacity>)
});

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;