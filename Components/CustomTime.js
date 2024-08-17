import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, Modal, Pressable, TouchableOpacity, ScrollView, Button } from 'react-native';
// import { Picker } from '@react-native-picker/picker'
// import DatePicker from 'react-native-date-picker' cannot work in Expo Go
import Icon from 'react-native-vector-icons/Entypo';
import DateTimePicker from "@react-native-community/datetimepicker"
import RNPickerSelect from 'react-native-picker-select';
import CustomButton from './CustomButton';

export default function CustomTime({ required = false, label, placeholder, onChange, value }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState("date")
    const [open, setOpen] = useState(false);

    function TimeModal() {
        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                    statusBarTranslucent
                >
                    <View style={[styles.centeredView, { backgroundColor: "rgba(0, 0, 0, 0.5)" }]} >
                        <View style={styles.modalView}>
                            <TouchableOpacity style={styles.indicator} onPress={() => setModalVisible(!modalVisible)} />
                            <Text style={styles.title}>Select Time</Text>
                            {/* <RNPickerSelect
                                onValueChange={value => console.log(value)}
                                items={[
                                    { label: "JavaScript", value: 'JavaScript' },
                                    { label: "Python", value: 'Python' },
                                    { label: "C", value: 'C' },
                                ]}
                            /> */}
                            <View style={{ flex: 1, flexDirection: "row", margin: 0 }}>
                                {/* <DateTimePicker
                                    value={date}
                                    mode="time"
                                    display='spinner'
                                    style={{ backgroundColor: "pink" }}
                                /> */}
                                {/* <Picker style={{ flex: 1 }}>
                                    <Picker.Item label="01" value={1} />
                                    <Picker.Item label="02" value={2} />
                                    <Picker.Item label="03" value={3} />
                                    <Picker.Item label="04" value={4} />
                                    <Picker.Item label="05" value={5} />
                                    <Picker.Item label="06" value={6} />
                                    <Picker.Item label="07" value={7} />
                                    <Picker.Item label="08" value={8} />
                                    <Picker.Item label="09" value={9} />
                                </Picker>
                                <Picker style={{ flex: 1 }}>
                                    <Picker.Item label="01" value={1} />
                                    <Picker.Item label="02" value={2} />
                                    <Picker.Item label="03" value={3} />
                                    <Picker.Item label="04" value={4} />
                                    <Picker.Item label="05" value={5} />
                                    <Picker.Item label="06" value={6} />
                                    <Picker.Item label="07" value={7} />
                                    <Picker.Item label="08" value={8} />
                                    <Picker.Item label="09" value={9} />
                                </Picker> */}

                                {/* <View style={{ backgroundColor: "blue", flex: 1 }} /> */}
                            </View>
                            <View style={{ flex: 1, flexDirection: "column-reverse" }}>
                                <CustomButton onPress={() => setModalVisible(!modalVisible)} label="Select" />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }

    return (
        <View style={{ marginBottom: 7 }}>
            <Text style={{ fontWeight: 600, fontSize: 19, marginBottom: 5 }}>
                {required && <Text style={{ color: 'red' }}>* </Text>}
                {label}
            </Text>
            <Pressable
                style={[styles.textInput, { paddingRight: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={{ fontSize: 18, fontWeight: "500", color: "#d8d8d8" }}>Select Time</Text>
                <Icon name="chevron-down" size={18} color="#d8d8d8" />
            </Pressable>
            <TimeModal />
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
        color: '#333', // Dark text color
        marginBottom: 10,
    },
    title: {
        color: "#2e4e7b",
        fontWeight: "bold",
        fontSize: 22,
        marginBottom: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        paddingBottom: 10,
        padding: 35,
        width: "100%",
        height: 280,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    indicator: {
        width: 40,
        height: 5,
        backgroundColor: "#d9d9d9",
        borderRadius: 20,
        marginTop: 14,
        position: "absolute",
        alignSelf: "center"
    }
})