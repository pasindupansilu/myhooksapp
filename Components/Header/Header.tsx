import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from './styles';
import PropTypes from "prop-types";

const Header = (props: any) => {

    const {
        headerIcon,
        heading,
        iconColor,
    } = props;

    return (
        <View style={styles.container}>
            <View style={styles.leftColumn}>
                <Text style={styles.title}>{heading}</Text>
            </View>
            <View style={styles.rightColumn}>
                <Icon name={headerIcon} color={iconColor} size={Dimensions.get("window").width * 0.06}/>
            </View>
        </View>
    );
}

Header.propTypes = {
    headerIcon: PropTypes.string,
    heading: PropTypes.string,
    iconColor: PropTypes.string,
}

export default Header;
