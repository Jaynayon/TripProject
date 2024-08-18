import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Modal, Pressable, TouchableOpacity, ScrollView, Button } from 'react-native';
// import { Picker } from '@react-native-picker/picker'
// import DatePicker from 'react-native-date-picker' cannot work in Expo Go
import Icon from 'react-native-vector-icons/Entypo';
import CustomButton from './CustomButton';
import WheelPicker from 'react-native-wheely';

export default function CustomDateTime({ time = false, required = false, label, onChange, value }) {
    const [modalVisible, setModalVisible] = useState(false);

    const displayValue = () => value || (time ? "Select Time" : "Select Date");

    function TimeModal() {
        const [selectedHour, setSelectedHour] = useState(0);
        const [selectedMinute, setSelectedMinute] = useState(0);

        const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
        const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

        const handlePress = () => {
            // Format the time as "HH:mm"
            const time = `${hours[selectedHour]}:${minutes[selectedMinute]}`;
            onChange(time);
            console.log(time);
            setModalVisible(!modalVisible);
        }

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
                            <Text style={styles.title}>{time ? "Select Time" : "Select Date"}</Text>
                            <View style={{ flex: 1, flexDirection: "row", margin: 0 }}>
                                <View style={{ flex: 1 }} >
                                    <WheelPicker
                                        selectedIndicatorStyle={{ backgroundColor: "transparent" }}
                                        itemTextStyle={{ fontSize: 20, fontWeight: "bold" }}
                                        itemStyle={{ alignSelf: "flex-end", bottom: 50, right: 10 }}
                                        selectedIndex={selectedHour}
                                        options={hours}
                                        onChange={(index) => setSelectedHour(index)}
                                    />
                                </View>
                                <View style={{ flex: 1 }} >
                                    <WheelPicker
                                        selectedIndicatorStyle={{ backgroundColor: "transparent" }}
                                        itemTextStyle={{ fontSize: 20, fontWeight: "bold" }}
                                        itemStyle={{ alignSelf: "flex-start", bottom: 50, left: 10, fontSize: 20 }}
                                        selectedIndex={selectedMinute}
                                        options={minutes}
                                        onChange={(index) => setSelectedMinute(index)}
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: "column-reverse" }}>
                                <CustomButton onPress={handlePress} label="Select" />
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
                <Text style={{ fontSize: 18, fontWeight: "500", color: value ? '#333' : "#d8d8d8" }}>
                    {displayValue()}
                </Text>
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