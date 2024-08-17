import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function CustomRecords({ maintenance = false, milage = "null", date = "null", time = "null" }) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>{milage}</Text>
            {maintenance ? (
                <Text style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 10 }}>{date} {time}</Text>
            ) : (
                <Text style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 10 }}>{date}</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        paddingTop: 15,
        borderBottomWidth: 2,
        borderColor: "#f9f9f9"
    }
});
