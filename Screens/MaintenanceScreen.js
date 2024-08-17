import React from 'react';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { Card } from 'react-native-paper';
import CustomRecords from '../Components/CustomRecords';

export default function MaintenanceScreen() {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <View style={styles.container}>
                    <Card style={styles.paper}>
                        <Text style={styles.title}>Maintenance Records</Text>
                        <CustomRecords
                            milage="10296"
                            date="2024-05-31"
                            time="09:00"
                        />
                        <CustomRecords
                            milage="10278"
                            date="2024-05-31"
                            time="11:00"
                        />
                    </Card>
                </View >
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 5
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
        paddingBottom: 20
    },
    title: {
        color: "#2e4e7b",
        fontWeight: "bold",
        fontSize: 22,
        marginBottom: 8
    }
});
