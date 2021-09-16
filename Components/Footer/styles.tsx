import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 15,
        borderRadius: 10,
    },

    column: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    btn: {
        padding: 25,
    },

    btnPrimary: {
        padding: 20,
        backgroundColor: Colors.Cyan,
        borderRadius: 150,
    },
})