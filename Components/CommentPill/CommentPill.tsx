import React, { useContext } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Colors } from '../../constants/Colors';
import { styles } from './styles';

const CommentPill = (props: any) => {

    const {
        comment,
    } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{comment.name}</Text>
            <View style={styles.seperator} />
            <Text style={styles.description}>{comment.body}</Text>
            <View style={styles.seperator} />
            <Text style={styles.footNote}>posted by {comment.email}</Text>
        </View>
    );
}



export default CommentPill;
