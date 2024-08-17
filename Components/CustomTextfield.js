import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function CustomTextfield({ tall = false, required = false, label, placeholder, onChange, value }) {
    return (
        <View style={{ marginBottom: 7 }}>
            <Text style={{ fontWeight: 600, fontSize: 19, marginBottom: 5 }}>
                {required && <Text style={{ color: 'red' }}>* </Text>}
                {label}
            </Text>
            <TextInput
                style={[styles.textInput, tall && styles.tallInput]}
                placeholder={placeholder}
                placeholderTextColor="#d8d8d8"
                onChangeText={onChange}
                value={value}
                multiline={tall}
                textAlignVertical={tall ? "top" : "center"}
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
        paddingRight: 20,
        fontSize: 18,
        color: '#333', // Dark text color
        marginBottom: 9,
        fontWeight: "500"
    },
    tallInput: {
        paddingTop: 20,
        height: 130
    }
})