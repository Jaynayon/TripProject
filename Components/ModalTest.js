import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from 'react-native';
import CustomButton from './CustomButton';

const ModalTest = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={[styles.centeredView, { backgroundColor: "rgba(0, 0, 0, 0.5)" }]}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={styles.indicator} onPress={() => setModalVisible(!modalVisible)} />
                        <Text style={styles.title}>Select Time</Text>
                        <View style={{ flex: 1, flexDirection: "column-reverse" }}>
                            <CustomButton onPress={() => setModalVisible(!modalVisible)} label="Select" />
                        </View>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: "#2e4e7b",
        fontWeight: "bold",
        fontSize: 23,
        marginBottom: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        paddingBottom: 10,
        padding: 35,
        width: "100%",
        height: 275,
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
        marginTop: 15,
        position: "absolute",
        alignSelf: "center"
    }
});

export default ModalTest;