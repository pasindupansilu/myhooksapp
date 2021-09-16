import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { PostContext } from '../../Context/Context';
import PostPill from '../PostPill/PostPill';
import { styles } from './styles';
import Swiper from 'react-native-swiper';

const PostList = () => {

    const posts = useContext(PostContext);

    return (
        <View style={styles.container}>
            {/* <ScrollView style={styles.subContainer}> */}
            <Swiper
                loop={true}
                showsButtons={true}
                dotColor={"#0000"}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {
                    posts.map((post: any, key) => {
                        return (
                            <PostPill
                                key={key + post.id}
                                post={post}
                            />
                        )
                    })
                }
            </Swiper>
            {/* </ScrollView> */}
        </View>
    );
}



export default PostList;
