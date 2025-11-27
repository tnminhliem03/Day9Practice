import { useContext, useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert } from "react-native";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = () => {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            await login({ username, password });
        } catch (err) {
            Alert.alert("Login Failed", err.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Username:</Text>
            <TextInput value={username} onChangeText={setUsername} style={styles.input} />
            <Text>Password:</Text>
            <TextInput value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20, flex: 1, justifyContent: "center" },
    input: { borderWidth: 1, borderColor: "red", marginBottom: 10, padding: 8, borderRadius: 4, color: 'black' },
});

export default LoginScreen;
