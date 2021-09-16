import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.GreyBlack,
    },

    card: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.MatteBlack,
        width: Dimensions.get("window").width - 40,
        padding: 20,
        borderRadius: 15,
        minHeight: Dimensions.get("window").height * 0.5,
    },

    title: {
        color: Colors.White,
        fontSize: Dimensions.get("window").width * 0.09,
        fontWeight: "bold",
    },

    btn: {
        marginTop: 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        width: Dimensions.get("window").width * 0.13,
        height: Dimensions.get("window").width * 0.13,
    },

    footNote: {
        color: Colors.Grey,
        marginTop: 10,
    }
})