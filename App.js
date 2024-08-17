import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BookingsScreen from './Screens/BookingsScreen';
import NotificationsScreen from './Screens/NotificationsScreen';
import NotificationsDetailsScreen from './Screens/NotificationsDetailsScreen';
import MaintenanceScreen from './Screens/MaintenanceScreen';
import MaintenanceDetailsScreen from './Screens/MaintenanceDetailsScreen';
import RefuelScreen from './Screens/RefuelScreen';
import RefuelDetailsScreen from './Screens/RefuelDetailsScreen';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.dummyTopNav} />
      {/* <BookingsScreen /> */}
      {/* <NotificationsScreen /> */}
      {/* <NotificationsDetailsScreen /> */}
      {/* <MaintenanceScreen /> */}
      {/* <MaintenanceDetailsScreen
        milage="10296"
        date="2024-05-31"
        time="09:00"
      /> */}
      {/* <RefuelScreen /> */}
      <RefuelDetailsScreen
        milage="10296"
        date="2024-05-31"
        price="5.00"
      />
      <View style={styles.dummyTabNav} />
    </View >
  );
}

const styles = StyleSheet.create({
  dummyTopNav: {
    height: 70,
    backgroundColor: "#0e3366"
  },
  dummyTabNav: {
    height: 70,
    backgroundColor: "#c2c2c2"
  }
});
