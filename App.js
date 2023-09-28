import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Logo from './components/Logo';
import Welcome from './components/Welcome';
import Input from './components/Input';
import SignUp from './components/SignUp';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Logo />
        <Welcome />
      </View>
      <View style={styles.bottomSection}>
        <Input />
        <SignUp/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#176B87',
  },
  topSection: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
