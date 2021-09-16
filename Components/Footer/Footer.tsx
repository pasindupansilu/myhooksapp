import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../constants/Colors';
import { styles } from './styles';
import PropTypes from "prop-types";

const Footer = (props: any) => {

    const {
        leftIcon,
        middleIcon,
        rightIcon,
        leftAction,
        middleAction,
        rightAction,
    } = props;

    return (
        <View style={styles.container}>
            <View style={styles.column}>
                <TouchableOpacity style={styles.btn} onPress={leftAction}>
                    {
                        leftIcon ? (
                            <Icon name={leftIcon} color={Colors.White} size={Dimensions.get('window').width * 0.05} />
                        ) : (
                            <></>
                        )
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.column}>
                <TouchableOpacity style={[styles.btn, styles.btnPrimary]} onPress={middleAction}>
                    {
                        middleIcon ? (
                            <Icon name={middleIcon} color={Colors.MatteBlack} size={Dimensions.get('window').width * 0.05} />
                        ) : (
                            <></>
                        )
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.column}>
                <TouchableOpacity style={styles.btn} onPress={rightAction}>
                    {
                        rightIcon ? (
                            <Icon name={rightIcon} color={Colors.White} size={Dimensions.get('window').width * 0.05} />
                        ) : (
                            <></>
                        )
                    }
                </TouchableOpacity>
            </View>
        </View>
    );
}

Footer.propTypes = {
    leftIcon: PropTypes.string,
    middleIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    leftAction: PropTypes.func,
    middleAction: PropTypes.func,
    rightAction: PropTypes.func,
}

export default Footer;
