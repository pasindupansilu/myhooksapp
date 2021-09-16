import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        backgroundColor: Colors.GreyBlack,
        borderRadius: 10,
    },

    title: {
        fontSize: width * 0.05,
        color: Colors.Cyan,
    },

    description: {
        color: Colors.LightGrey,
    },

    seperator: {
        marginTop: 12,
        marginBottom: 10,
        borderBottomWidth: 1.5,
        borderBottomColor: Colors.MatteBlack,
    },

    footNote: {
        textAlign: "right",
        color: Colors.LightBlue,
    },
})