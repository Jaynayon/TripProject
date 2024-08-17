import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function CustomTextfield({ required = false, label, placeholder, onChange, value }) {
    return (
        <View style={{ marginBottom: 7 }}>
            <Text style={{ fontWeight: 600, fontSize: 19, marginBottom: 5 }}>
                {required && <Text style={{ color: 'red' }}>* </Text>}
                {label}
            </Text>
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                placeholderTextColor="#d8d8d8"
                onChangeText={onChange}
                value={value}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: "#ebebea",
        borderRadius: 8,
        borderWidth: 2,
        padding: 7,
        paddingLeft: 20,
        fontSize: 18,
        color: '#333', // Dark text color
        marginBottom: 9,
        fontWeight: "500"
    },
})