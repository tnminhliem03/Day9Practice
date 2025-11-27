import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Platform.select({
            ios: 'skyblue',
            android: 'lightgreen',
        }),
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },

    title: {
        fontSize: 20,
        marginBottom: 20,
        color: Platform.select({
            ios: 'red',
            android: 'black',
        }),
    },
});