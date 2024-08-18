import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/Entypo';
import CustomButton from './CustomButton';
import WheelPicker from 'react-native-wheely';

export default function CustomDateTime({ time = false, required = false, label, onChange, value }) {
    const date = new Date();
    const year = date.getFullYear();
    const [modalVisible, setModalVisible] = useState(false);

    const displayValue = () => value || (time ? "Select Time" : "Select Date");

    function DateModal() {
        const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
        const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));

        // Regular expression to validate yyyy-mm-dd format
        const isValidDate = (dateValue) => /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(dateValue);

        // Initialize selectedMonth and selectedDay states with validation
        const [selectedMonth, setSelectedMonth] = useState(() => {
            if (value && isValidDate(value)) {
                const month = value.substring(5, 7);
                return months.indexOf(month);
            }
            return 0; // Default to January if no valid value is provided
        });

        const [selectedDay, setSelectedDay] = useState(() => {
            if (value && isValidDate(value)) {
                const day = value.substring(8, 10);
                return parseInt(day, 10) - 1; // Subtract 1 to get zero-based index
            }
            return 0; // Default to the 1st of the month if no valid value is provided
        });

        // Function to calculate the number of days in a given month
        const calculateNumberOfDays = (monthIndex) => {
            return new Date(year, monthIndex + 1, 0).getDate();
        };

        // Update numberOfDays and adjust selectedDay if necessary when selectedMonth changes
        useEffect(() => {
            const daysInMonth = calculateNumberOfDays(selectedMonth);

            // Adjust selectedDay if the current day exceeds the number of days in the new month
            if (selectedDay >= daysInMonth) {
                setSelectedDay(daysInMonth - 1);
            }
        }, [selectedMonth]);

        const handlePress = () => {
            const month = months[selectedMonth]; // Month from the array (01-12)

            // Get the number of days in the selected month
            const daysInMonth = calculateNumberOfDays(selectedMonth);

            // Adjust the day if it's beyond the last valid day of the month
            const day = Math.min(parseInt(days[selectedDay]), daysInMonth).toString().padStart(2, '0');

            // Format the date as "yyyy-mm-dd"
            const date = `${year}-${month}-${day}`;
            console.log(date);

            onChange(date);
            setModalVisible(!modalVisible);
        }

        return (
            <View style={styles.centeredView}>
                <Modal
                    style={{ margin: 0 }}
                    animationType="slide"
                    // swipeDirection={['down']}
                    onSwipeComplete={() => setModalVisible(!modalVisible)}
                    isVisible={modalVisible}
                    statusBarTranslucent
                    hasBackdrop
                    onBackButtonPress={() => setModalVisible(!modalVisible)}
                    onBackdropPress={() => setModalVisible(!modalVisible)}
                >
                    <View style={styles.centeredView} >
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                style={styles.indicator}
                                onPress={() => setModalVisible(!modalVisible)}
                            />
                            <Text style={styles.title}>Select Date</Text>
                            <View style={{ flex: 1, flexDirection: "row", margin: 0 }}>
                                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{year}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <WheelPicker
                                        selectedIndicatorStyle={{ backgroundColor: "transparent" }}
                                        itemTextStyle={{ fontSize: 20, fontWeight: "bold" }}
                                        itemStyle={{ flexDirection: "row-reverse", bottom: 50 }}
                                        containerStyle={{ height: 110 }}
                                        selectedIndex={selectedMonth}
                                        options={months}
                                        decelerationRate={15}
                                        onChange={(index) => setSelectedMonth(index)}
                                    />
                                </View>
                                <View style={{ flex: 1 }} >
                                    <WheelPicker
                                        selectedIndicatorStyle={{ backgroundColor: "transparent" }}
                                        itemTextStyle={{ fontSize: 20, fontWeight: "bold" }}
                                        containerStyle={{ height: 110 }}
                                        itemStyle={{ flexDirection: "row-reverse", bottom: 50 }}
                                        selectedIndex={selectedDay}
                                        options={days}
                                        decelerationRate={15}
                                        onChange={(index) => setSelectedDay(index)}
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: "column-reverse" }}>
                                <CustomButton
                                    onPress={handlePress}
                                    label="Select"
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }

    function TimeModal() {
        const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
        const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

        // Regular expression to validate HH:mm format
        const isValidTime = (timeValue) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(timeValue);

        // Initialize selectedHour and selectedMinute states with validation
        const [selectedHour, setSelectedHour] = useState(() =>
            isValidTime(value) ? hours.indexOf(value.substring(0, 2)) : 0
        );
        const [selectedMinute, setSelectedMinute] = useState(() =>
            isValidTime(value) ? minutes.indexOf(value.substring(3, 5)) : 0
        );

        const handlePress = () => {
            // Format the time as "HH:mm"
            const time = `${hours[selectedHour]}:${minutes[selectedMinute]}`;
            console.log(time);

            onChange(time);
            setModalVisible(!modalVisible);
        }

        return (
            <View style={styles.centeredView}>
                <Modal
                    style={{ margin: 0 }}
                    animationType="slide"
                    // swipeDirection={['down']}
                    onSwipeComplete={() => setModalVisible(!modalVisible)}
                    isVisible={modalVisible}
                    statusBarTranslucent
                    hasBackdrop
                    onBackButtonPress={() => setModalVisible(!modalVisible)}
                    onBackdropPress={() => setModalVisible(!modalVisible)}
                >
                    <View style={styles.centeredView} >
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                style={styles.indicator}
                                onPress={() => setModalVisible(!modalVisible)}
                            />
                            <Text style={styles.title}>Select Time</Text>
                            <View style={{ flex: 1, flexDirection: "row", margin: 0 }}>
                                <View style={{ flex: 1 }} >
                                    <WheelPicker
                                        selectedIndicatorStyle={{ backgroundColor: "transparent" }}
                                        itemTextStyle={{ fontSize: 20, fontWeight: "bold" }}
                                        containerStyle={{ height: 110 }}
                                        itemStyle={{ alignSelf: "flex-end", bottom: 50, right: 10 }}
                                        selectedIndex={selectedHour}
                                        decelerationRate={15}
                                        options={hours}
                                        onChange={(index) => setSelectedHour(index)}
                                    />
                                </View>
                                <View style={{ flex: 1 }} >
                                    <WheelPicker
                                        selectedIndicatorStyle={{ backgroundColor: "transparent" }}
                                        itemTextStyle={{ fontSize: 20, fontWeight: "bold" }}
                                        containerStyle={{ height: 110 }}
                                        itemStyle={{ alignSelf: "flex-start", bottom: 50, left: 10, fontSize: 20 }}
                                        selectedIndex={selectedMinute}
                                        options={minutes}
                                        decelerationRate={15}
                                        onChange={(index) => setSelectedMinute(index)}
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: "column-reverse" }}>
                                <CustomButton
                                    onPress={handlePress}
                                    label="Select"
                                />
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
            {time ? <TimeModal /> : <DateModal />}
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