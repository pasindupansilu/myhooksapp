import React, { createContext, useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { getAllComments } from '../../api_services/comment_services';
import CommentList from '../../Components/CommentList/CommentList';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { Colors } from '../../constants/Colors';
import { CommentsContext } from '../../Context/Context';
import { useAppState } from '../../CustomHooks/hooks';
import { styles } from './styles';

const Comments = (props: any) => {

    const {
        navigation,
        route
    } = props;

    const [allComments, setAllComments] = useState([]);

    const handleNavigationBack = () => {
        navigation.goBack();
    }

    useEffect(() => {
        getData();
        console.log(route)
    }, [])

    const getData = () => {
        getAllComments().then((response: any) => {
            if (response.data) {
                setAllComments(response.data);
            } else {
                setAllComments([]);
            }
        }).catch((error: any) => {
            console.log(error);
        })
    }

    useAppState(route.name)

    return (
        <View style={styles.container}>
            <Header
                heading={"Comments"}
                headerIcon={"list"}
                iconColor={Colors.White}
            />
            <CommentsContext.Provider value={allComments}>
                <CommentList enableSearch={true} />
            </CommentsContext.Provider>
            <Footer
                leftIcon={"arrow-left"}
                middleIcon={"sync"}
                rightIcon={""}
                leftAction={handleNavigationBack}
            />
        </View>
    );
}



export default Comments;
