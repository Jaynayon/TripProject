import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BookingsScreen from './Screens/BookingsScreen';
import NotificationsScreen from './Screens/NotificationsScreen';
import ModalTest from './Components/ModalTest';


export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your apps!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View style={styles.container}>
      <View style={{ height: 70, backgroundColor: "#0e3366" }} />
      {/* <BookingsScreen /> */}
      <NotificationsScreen />
      {/* <ModalTest /> */}
      <View style={{ height: 70, backgroundColor: "#c2c2c2" }} />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
