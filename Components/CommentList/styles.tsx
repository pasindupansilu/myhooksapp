import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    subContainer: {
        flex: 1,
    },

    searchBox: {
        backgroundColor: Colors.GreyBlack,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        color: Colors.White
    }
})