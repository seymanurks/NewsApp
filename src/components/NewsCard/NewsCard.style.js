import {StyleSheet, Dimensions} from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        margin: 10,
        borderRadius: 10

    },
    image: {
        height: Dimensions.get("window").height / 4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    text: {
        padding: 5
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
    },
    description: {
        marginTop: 3
    },
    author: {
        padding: 5,
        fontStyle: "italic",
        textAlign: "right"
    }
})