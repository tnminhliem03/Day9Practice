/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { styles } from './src/styles/styles';
import VisibilityScreen from './src/screens/VisibilityScreen';
import PostScreen from './src/screens/PostScreen';
import ImageListScreen from './src/screens/ImageListScreen';
import SplashScreen from './src/screens/SplashScreen';
import { AuthProvider } from './src/context/AuthContext';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        {/* <SafeAreaView style={{ flex: 1 }}> */}
        {/* <Text style={styles.title}>Platform Specific Button Example</Text>
      <MyButton title="Click Me" onPress={handlePress} /> */}
        {/* <VisibilityScreen /> */}
        {/* <PostScreen /> */}
        {/* <ImageListScreen /> */}
        <SplashScreen />
      </SafeAreaView>
    </AuthProvider>
  );
}

export default App;
