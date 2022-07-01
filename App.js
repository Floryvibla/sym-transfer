import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, View, SafeAreaView, Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppNavigation from './src/Navigations';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_900Black} from '@expo-google-fonts/inter';

export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_900Black
  })

  if (!fontsLoaded) {
    return <Text>Carregando..</Text>
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <AppNavigation />
      </SafeAreaView>
      <StatusBar backgroundColor='#fff' style="dark" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" && 20
  },
});
