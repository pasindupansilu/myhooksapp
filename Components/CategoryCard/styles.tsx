import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        margin: 10,
        justifyContent: "center",
    },
    
    subContainer: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.GreyBlack,
        borderRadius: 15,
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    leftColumn: {
        alignItems: "center",
        justifyContent: "center",
    },

    rightColumn: {
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
        fontSize: width * 0.06,
        marginTop: 10,
        fontWeight: "bold",
        color: Colors.White
    },

    subTitle: {
        fontSize: width * 0.06,
        color: Colors.Grey,
        marginLeft: 10,
    },
})