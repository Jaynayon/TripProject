import React from 'react';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Card } from 'react-native-paper';
import CustomNotification from '../Components/CustomNotification';

export default function NotificationsScreen() {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <View style={styles.container}>
                    <Card style={styles.paper}>
                        <CustomNotification maintenance />
                        <CustomNotification />
                        {/* <CustomNotification maintenance />
                        <CustomNotification />
                        <CustomNotification maintenance />
                        <CustomNotification /> */}
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
        paddingBottom: 16,
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 5, // For Android shadow
        shadowColor: '#000', // For iOS shadow
        shadowOffset: { width: 0, height: 2 }, // For iOS shadow
        shadowOpacity: 0.3, // For iOS shadow
        shadowRadius: 4, // For iOS shadow
    },
});
