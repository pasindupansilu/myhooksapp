import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 20,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: Colors.GreyBlack,
        borderRadius: 10,
    },

    leftColumn: {
        flex: 0.85,
        alignItems: 'flex-start',
        justifyContent: "center",
    },

    rightColumn: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: "center",
    },

    title: {
        fontSize: Dimensions.get("window").width * 0.08,
        color: Colors.White,
        fontWeight: "bold",
    },
})