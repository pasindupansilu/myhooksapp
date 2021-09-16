import React from 'react';
import { View, StyleSheet, Text, Touchable, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../constants/Colors';
import { Dimensions } from 'react-native';

const Splash = (props: any) => {

    const {
        navigation,
    } = props;

    const handleOnPress = () => {
        navigation.navigate("Home");
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Get Started.</Text>
                <TouchableOpacity onPress={handleOnPress} style={styles.btn}>
                    <Icon name="arrow-right" size={Dimensions.get("window").width * 0.08} color={Colors.Cyan} />
                </TouchableOpacity>
            </View>
            <Text style={styles.footNote}>Enjoy...</Text>
        </View>
    );
}

export default Splash;
