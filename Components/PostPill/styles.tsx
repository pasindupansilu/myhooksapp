import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding: 10,
        paddingHorizontal: 25,
        backgroundColor: Colors.GreyBlack,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },

    title: {
        fontSize: width * 0.05,
        color: Colors.Cyan,
        textAlign: "center",
    },

    description: {
        color: Colors.LightGrey,
        textAlign: "center",
    },

    seperator: {
        marginTop: 12,
        marginBottom: 10,
        borderBottomWidth: 1.5,
        borderBottomColor: Colors.MatteBlack,
    },

    footNote: {
        textAlign: "center",
        color: Colors.LightBlue,
        marginRight: 7,
    },

    footButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    commentSection: {
        overflow: "hidden",
        backgroundColor: Colors.MatteBlack,
        paddingVertical: 10,
        borderRadius: 10,
    }
})