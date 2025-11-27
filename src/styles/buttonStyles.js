import { StyleSheet, Platform } from 'react-native';

export const buttonStyles = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
                backgroundColor: 'pink',
                borderRadius: 12,
            },
            android: {
                backgroundColor: 'purple',
                borderRadius: 4,
            },
        }),
        padding: 10,
        alignItems: 'center',
    },

    text: {
        color: 'white',
        fontWeight: 'bold',
    },
});
