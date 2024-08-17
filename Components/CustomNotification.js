import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CustomNotification({ maintenance = false }) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.15, alignItems: "center", marginTop: 2 }}>
                <Icon name="warning" size={25} color={maintenance ? "#cc9900" : "#3488ff"} />
            </View>
            {maintenance ? (
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>Vehicle Need Miantenance</Text>
                    <Text style={{ width: 300, fontSize: 20, paddingBottom: 20 }}>Your vehicle has run 5000 mi. You need to make a vehicle maintenance</Text>
                    <Text style={{ color: "#d6d6d6", fontWeight: 500, paddingBottom: 6 }}>2024-05-31 15:00</Text>
                </View>
            ) : (
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>Booking Updates</Text>
                    <Text style={{ width: 300, fontSize: 20, paddingBottom: 20 }}>
                        There has been an update to the booking schedule
                        <Text style={{ fontWeight: 500, color: "#3893ff" }}> SH240430-10001</Text>
                    </Text>
                    <Text style={{ color: "#d6d6d6", fontWeight: 500, paddingBottom: 6 }}>2024-05-31 15:00</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        paddingTop: 15,
        borderBottomWidth: 2,
        borderColor: "#f9f9f9"
    },
    paper: {
        width: "100%",
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 5, // For Android shadow
        shadowColor: '#000', // For iOS shadow
        shadowOffset: { width: 0, height: 2 }, // For iOS shadow
        shadowOpacity: 0.3, // For iOS shadow
        shadowRadius: 4, // For iOS shadow
    },
    title: {
        color: "#2e4e7b",
        fontWeight: "bold",
        fontSize: 22,
        marginBottom: 14
    }
});
