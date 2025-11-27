import { useContext } from "react";
import { View, Text } from "react-native";
import { AuthContext } from "../context/AuthContext";
import ProfileScreen from "./ProfileScreen";
import LoginScreen from "./LoginScreen";

const SplashScreen = () => {
    const { user, isLoading } = useContext(AuthContext);

    if (isLoading) return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><Text>Loading...</Text></View>;

    return user ? <ProfileScreen /> : <LoginScreen />;
};

export default SplashScreen;
