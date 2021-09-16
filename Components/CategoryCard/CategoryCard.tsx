import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';


const CategoryCard = (props: any) => {

    const { width, height } = Dimensions.get("window");

    const {
        icon,
        count,
        title,
        handleAction
    } = props;


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.subContainer} onPress={handleAction}>
                <View style={styles.row}>
                    <View style={styles.leftColumn}>
                        <Icon name={icon} size={width * 0.08} color={Colors.Cyan} />
                    </View>
                    <View style={styles.rightColumn}>
                        <Text style={styles.subTitle}>{count}</Text>
                    </View>
                </View>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

CategoryCard.propTypes = {
    icon: PropTypes.string,
    count: PropTypes.any,
    title: PropTypes.string,
    handleAction: PropTypes.func,
}

export default CategoryCard;
