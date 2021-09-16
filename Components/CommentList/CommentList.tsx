import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from '../../constants/Colors';
import { CommentsContext } from '../../Context/Context';
import CommentPill from '../CommentPill/CommentPill';
import { styles } from './styles';

const CommentList = (props: any) => {

    const {
        enableSearch
    } = props;

    const comments = useContext(CommentsContext);

    const [filterText, setFilterText] = useState("");
    const [filterRegex, setFilterRegex] = useState(/./);

    useEffect(
        () => {
            if (typeof filterText == "string" && filterText.trim()) {
                let regex = new RegExp(`(${filterText})`);
                console.log(typeof regex, regex)
                setFilterRegex(regex);
            } else {
                setFilterRegex(/./);
            }
        }, [filterText]
    )

    return (
        <View style={styles.container}>
            {
                enableSearch ? (
                    <TextInput
                        style={styles.searchBox}
                        placeholder={"Enter keyword to search"}
                        placeholderTextColor={Colors.Grey}
                        onChangeText={setFilterText}
                        value={filterText}
                    />
                ) : (
                    <></>
                )
            }
            <ScrollView style={styles.subContainer}>
                {
                    comments.filter((comment: any) => filterRegex.test(comment.name) || filterRegex.test(comment.body) || filterRegex.test(comment.email)).map((comment, key) => {
                        return (
                            <CommentPill
                                key={key + comment.id}
                                comment={comment}
                            />
                        )
                    })
                    // filterText && filterText.trim() ? (
                    //     comments.filter((comment: any) => comment.name.startsWith(filterText) || comment.body.startsWith(filterText) || comment.email.startsWith(filterText)).map((comment, key) => {
                    //         return (
                    //             <CommentPill
                    //                 key={key + comment.id}
                    //                 comment={comment}
                    //             />
                    //         )
                    //     })
                    // ) : (
                    //     comments.map((comment, key) => {
                    //         return (
                    //             <CommentPill
                    //                 key={key + comment.id}
                    //                 comment={comment}
                    //             />
                    //         )
                    //     })
                    // )
                }
            </ScrollView>
        </View>
    );
}


export default CommentList;
