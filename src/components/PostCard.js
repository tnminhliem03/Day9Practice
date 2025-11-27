import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

const PostCard = ({ title, body }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{body}</Text>
        </View>
    )
}

export default memo(PostCard);

const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    body: {
        fontSize: 14,
        color: '#666',
        fontStyle: 'italic',
    },
})