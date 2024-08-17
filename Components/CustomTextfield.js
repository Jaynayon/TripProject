import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function CustomTextfield({ price = false, tall = false, required = false, label, placeholder, onChange, value }) {
    return (
        <View style={{ marginBottom: 7 }}>
            <Text style={{ fontWeight: 600, fontSize: 19, marginBottom: 5 }}>
                {required && <Text style={{ color: 'red' }}>* </Text>}
                {label}
            </Text>
            {price ? (
                <View style={[styles.inputContainer, tall && styles.tallInput]}>
                    <Text style={[styles.text, { paddingRight: 5 }, tall && styles.tallInput]}>$</Text>
                    <TextInput
                        style={[styles.text, tall && styles.tallInput, { flex: 1 }]}// Ensures TextInput takes up the remaining space
                        placeholder={placeholder}
                        placeholderTextColor="#d8d8d8"
                        onChangeText={onChange}
                        value={value}
                        multiline={tall}
                        textAlignVertical={tall ? "top" : "center"}
                    />
                </View>
            ) : (
                <TextInput
                    style={[styles.textInput, tall && styles.tallInput]}
                    placeholder={placeholder}
                    placeholderTextColor="#d8d8d8"
                    onChangeText={onChange}
                    value={value}
                    multiline={tall}
                    textAlignVertical={tall ? "top" : "center"}
                />
            )}
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
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#ebebea",
        borderRadius: 8,
        borderWidth: 2,
        padding: 7,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 9,
    },
    text: {
        fontSize: 18,
        fontWeight: "500",
        color: '#333'
    }
})