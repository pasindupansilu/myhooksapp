import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.MatteBlack
    }
})