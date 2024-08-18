import React from 'react';
import { StyleSheet, View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../Components/CustomButton';

export default function NotificationsDetailsScreen() {
    const handleClick = () => {
        console.log("Acknowledged!")
    }
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <View style={styles.container}>
                    <Card style={styles.paper}>
                        <View style={styles.titleContainer}>
                            <View style={{ flex: 0.15, alignItems: "center", marginTop: 2 }}>
                                <Icon name="warning" size={25} color={"#3488ff"} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.title}>Booking Updates</Text>
                            </View>
                        </View>
                        <View style={{ paddingLeft: 18, marginTop: -10, paddingRight: 20 }}>
                            <Text style={{ fontSize: 15 }}>2024-05-31 07:00</Text>
                            <Text style={{ width: 320, fontSize: 20, paddingTop: 20, paddingBottom: 20 }}>
                                There has been an update to the booking schedule
                                <Text style={{ fontSize: 21, fontWeight: 500 }}> SH240430-10001</Text>
                            </Text>
                            <Text style={{ fontSize: 20 }}>Booking Details:</Text>
                            <Text style={styles.firstOrder}>{`\u2022`}  Original Schedule:</Text>
                            <Text style={styles.secondOrder}>
                                {`\u2022`}  Date: <Text style={{ fontWeight: "bold" }}>2024-05-01</Text>
                            </Text>
                            <Text style={styles.secondOrder}>
                                {`\u2022`}  Time: <Text style={{ fontWeight: "bold" }}>17:00</Text>
                            </Text>
                            <Text style={styles.firstOrder}>{`\u2022`}  Updated Schedule:</Text>
                            <Text style={styles.secondOrder}>
                                {`\u2022`}  Date: <Text style={{ fontWeight: "bold" }}>2024-05-02</Text>
                            </Text>
                            <Text style={[styles.secondOrder, { paddingBottom: 20 }]}>
                                {`\u2022`}  Time: <Text style={{ fontWeight: "bold" }}>17:00</Text>
                            </Text>
                            <Text style={{ fontSize: 20, paddingBottom: 20 }}>Thank you for your understanding and cooperation</Text>
                        </View>
                    </Card>
                </View >
            </ScrollView>
            <View style={{ flex: 1, flexDirection: "column-reverse" }}>
                <CustomButton onPress={handleClick} label="Acknowledge" />
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 5,
        paddingTop: 10
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 0,
        borderBottomWidth: 2,
        borderColor: "#f9f9f9"
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
    title: {
        color: "#2e4e7b",
        fontWeight: "bold",
        fontSize: 22,
        marginBottom: 14
    },
    firstOrder: {
        fontSize: 20,
        paddingLeft: 10
    },
    secondOrder: {
        fontSize: 20,
        paddingLeft: 35
    }
});
