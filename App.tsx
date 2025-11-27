/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, Text, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { styles } from './src/styles/styles';
import VisibilityScreen from './src/screens/VisibilityScreen';
import PostScreen from './src/screens/PostScreen';

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
  const handlePress = () => {
    console.log('ok');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <SafeAreaView style={{ flex: 1 }}> */}
      {/* <Text style={styles.title}>Platform Specific Button Example</Text>
      <MyButton title="Click Me" onPress={handlePress} /> */}
      {/* <VisibilityScreen /> */}
      <PostScreen />
    </SafeAreaView>
  );
}

export default App;
