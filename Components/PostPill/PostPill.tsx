import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAllCommentsByPost } from '../../api_services/comment_services';
import { Colors } from '../../constants/Colors';
import { CommentsContext } from '../../Context/Context';
import CommentList from '../CommentList/CommentList';
import { styles } from './styles';
import Dialog, { DialogContent, SlideAnimation } from 'react-native-popup-dialog';

const PostPill = (props: any) => {
    const {
        post,
    } = props;

    const { width, height } = Dimensions.get("window");

    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const [allComments, setAllComments] = useState([]);

    const commentSectionHeight = new Animated.Value(0);

    useEffect(() => {
        if (isCommentsOpen) {
            getCommentData()
        }
    }, [isCommentsOpen])

    const handleAnimation = () => {
        setIsCommentsOpen(!isCommentsOpen);
    }

    useEffect(() => {
        if (isCommentsOpen) {
            Animated.timing(commentSectionHeight, {
                toValue: 300,
                duration: 500,
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(commentSectionHeight, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start();
        }
    }, [isCommentsOpen])

    const getCommentData = () => {
        console.log(post.id)
        getAllCommentsByPost(post.id).then((response: any) => {
            if (response.data) {
                setAllComments(response.data)
            } else {
                setAllComments([])
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{post.title}</Text>
            <View style={styles.seperator} />
            <Text style={styles.description}>{post.body}</Text>
            <View style={styles.seperator} />
            <TouchableOpacity
                onPress={handleAnimation}
                style={[styles.footButton, {
                    marginBottom: isCommentsOpen ? 10 : 0
                }]}
            >
                <Text style={styles.footNote}>{isCommentsOpen ? "Hide Comments" : "Load Comments"}</Text>
                <Icon name={isCommentsOpen ? "caret-up" : "caret-down"} color={Colors.Blue} size={20} />
            </TouchableOpacity>
            <Animated.View style={[styles.commentSection, {
                height: commentSectionHeight,
                minHeight: commentSectionHeight,
                maxHeight: commentSectionHeight,
                paddingVertical: isCommentsOpen ? 10 : 0,
            }]}>
                <CommentsContext.Provider value={allComments}>
                    <CommentList enableSearch={false} />
                </CommentsContext.Provider>
            </Animated.View>
            <Dialog
                visible={true}
                onTouchOutside={() => {
                    setIsCommentsOpen(false);
                }}
                dialogAnimation={new SlideAnimation({
                    slideFrom: 'bottom',
                })}
            >
                <CommentsContext.Provider value={allComments}>
                    <CommentList enableSearch={false} />
                </CommentsContext.Provider>
            </Dialog>
        </View>
    );
}



export default PostPill;
