import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BookingsScreen from './Screens/BookingsScreen';
import NotificationsScreen from './Screens/NotificationsScreen';
import NotificationsDetailsScreen from './Screens/NotificationsDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ height: 70, backgroundColor: "#0e3366" }} />
      {/* <BookingsScreen /> */}
      {/* <NotificationsScreen /> */}
      {/* <NotificationsDetailsScreen /> */}
      <View style={{ height: 70, backgroundColor: "#c2c2c2" }} />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
