import { Animated, Button, Platform, StyleSheet, Text, useColorScheme, View } from "react-native";
import { useRef, useState } from "react";

const VisibilityScreen = () => {
    const [isVisible, setIsVisible] = useState(true);
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const scheme = useColorScheme();

    const toggleVisibility = () => {
        Animated.timing(fadeAnim, {
            toValue: isVisible ? 0 : 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
        setIsVisible(!isVisible);
    }

    const buttonColor = scheme === 'dark' ? 'red' : 'limegreen';
    const textColor = scheme === 'dark' ? '#fff' : '#000';

    return (
        <View style={[styles.container]}>
            <Animated.View style={{ opacity: fadeAnim }}>
                {isVisible && <View style={[styles.button, { backgroundColor: buttonColor }]}>
                    <Text style={{ color: textColor }}>Platform Button</Text>
                </View>}
            </Animated.View>
            <Button title="Toggle Button" onPress={toggleVisibility} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
    button: { padding: 12, borderRadius: 10, marginBottom: 20, alignItems: 'center' },
});

export default VisibilityScreen;