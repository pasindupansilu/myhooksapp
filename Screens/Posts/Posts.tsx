import React, { createContext, useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { getAllCommentsByPost } from '../../api_services/comment_services';
import { getAllPosts } from '../../api_services/post_services';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import PostList from '../../Components/PostList/PostList';
import { Colors } from '../../constants/Colors';
import { CommentsContext, PostContext } from '../../Context/Context';
import { useAppState } from '../../CustomHooks/hooks';
import { route } from '../../route/route';
import { styles } from './styles';

const Posts = (props: any) => {

    const {
        navigation,
        route
    } = props;

    const [allPosts, setAllPosts] = useState([]);

    const handleNavigationBack = () => {
        navigation.goBack();
    }

    useEffect(() => {
        getData();
    }, [])

    useAppState(route.name)

    const getData = () => {
        getAllPosts().then((response: any) => {
            if (response.data) {
                setAllPosts(response.data);
            } else {
                setAllPosts([]);
            }
        }).catch((error: any) => {
            console.log(error);
        })
    }

    return (
        <View style={styles.container}>
            <Header
                heading={"Posts"}
                headerIcon={"brush"}
                iconColor={Colors.White}
            />
            <PostContext.Provider value={allPosts}>
                <PostList />
            </PostContext.Provider>
            <Footer
                leftIcon={"arrow-left"}
                middleIcon={"sync"}
                rightIcon={""}
                leftAction={handleNavigationBack}
            />
        </View>
    );
}



export default Posts;
