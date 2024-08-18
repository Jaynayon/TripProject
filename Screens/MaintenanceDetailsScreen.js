import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, ScrollView, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { Card } from 'react-native-paper';
import CustomTextfield from '../Components/CustomTextfield';
import CustomButton from '../Components/CustomButton';
import CustomDateTime from '../Components/CustomDateTime';
import { Formik } from 'formik';

export default function MaintenanceDetailsScreen({ milage = "", date = "", time = "", remarks = "" }) {
    const [keyboardOpen, setKeyboardOpen] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardOpen(true));
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardOpen(false));

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    useEffect(() => {
        console.log(keyboardOpen)
    }, [keyboardOpen])

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Formik
                initialValues={{ milage: milage, date: date, time: time, remarks: remarks }}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {(props) => (
                    <ScrollView>
                        <View style={styles.container}>
                            <Card style={styles.paper}>
                                <Text style={styles.title}>Maintenance Details</Text>
                                <CustomTextfield
                                    required
                                    label="Current Vehicle Milage"
                                    placeholder="Enter Current Milage"
                                    onChange={props.handleChange('milage')}
                                    value={props.values.milage}
                                />
                                <CustomDateTime
                                    required
                                    label="Date of Maintenance"
                                    placeholder="Select Time"
                                    onChange={props.handleChange('date')}
                                    value={props.values.date}
                                />
                                <CustomDateTime
                                    required
                                    time
                                    label="Time of Maintenance"
                                    onChange={props.handleChange('time')}
                                    value={props.values.time}
                                />
                                <CustomTextfield
                                    tall
                                    label="Remarks"
                                    placeholder="Enter Current Milage"
                                    onChange={props.handleChange('remarks')}
                                    value={props.values.remarks}
                                />
                            </Card>
                            <View style={{ flex: 1, marginTop: !keyboardOpen ? "10%" : "5%", flexDirection: "column-reverse" }}>
                                <CustomButton onPress={props.handleSubmit} label="Save" />
                            </View>
                        </View >
                    </ScrollView>
                )}
            </Formik >
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
    },
    title: {
        color: "#2e4e7b",
        fontWeight: "bold",
        fontSize: 22,
        marginBottom: 14
    }
});
