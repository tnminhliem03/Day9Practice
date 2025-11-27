import { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";

const ProfileScreen = () => {
    const { logout, user } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            {user && (
                <>
                    <Text>Username: {user.username}</Text>
                </>
            )}
            <Button title="Logout" onPress={logout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", padding: 20 },
    title: { fontSize: 22, marginBottom: 10 },
});

export default ProfileScreen;
