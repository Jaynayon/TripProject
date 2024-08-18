import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CustomButton({ onPress, label }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        backgroundColor: '#3488ff',
        borderRadius: 8,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: "column",
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
    },
});