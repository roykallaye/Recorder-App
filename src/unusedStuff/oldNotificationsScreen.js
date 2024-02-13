import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import GlobalStyles from '../constants/GlobalStyles';

const { width } = Dimensions.get('window');

const scaleFont = (size) => size * (width / 375);

const scaleSize = (size) => size * (width / 375);

const Notifications = () => {
    const navigation = useNavigation();
    const [isNotificationOn, setIsNotificationOn] = useState(false);
    const [selectedTime, setSelectedTime] = useState(new Date());

    const formatTime = (time) => {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        const dayPart = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        return `${hours}:${minutes} ${dayPart}`;
    }

    const toggleNotification = (newState) => {
        setIsNotificationOn(newState);
    };

    const onChange = (event, selectedDate) => {
        if (selectedDate) {
            setSelectedTime(selectedDate);
        }
    };

    const showPicker = () => {
        DateTimePickerAndroid.open({
            value: selectedTime,
            onChange,
            mode: 'time',
            is24Hour: false,
        });
    };

    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <StatusBar style={GlobalStyles.backgroundColor} />

            {/* header */}
            <View style={styles.headerView}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="chevron-back-outline" size={scaleFont(20)} color={GlobalStyles.primaryColor} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Notifications</Text>
            </View>
            
            {/* Toggle and Time Picker Section */}
            <View style={styles.toggleNotification}>
                <Text style={styles.toggleNotificationText}>Set notification time</Text>
                <View style={styles.toggleButtonsView}>
                    <TouchableOpacity onPress={() => toggleNotification(true)}>
                        <Text style={{ fontSize: scaleFont(14), color: isNotificationOn ? GlobalStyles.primaryColor : GlobalStyles.grayOutColor }}>ON</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleNotification(false)}>
                        <Text style={{ fontSize: scaleFont(14), color: isNotificationOn ? GlobalStyles.grayOutColor : GlobalStyles.primaryColor }}>OFF</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Time Picker */}
            {isNotificationOn && (
                <View>
                    <TouchableOpacity onPress={showPicker} style={styles.timePickerButtonBorder}>
                        <Text style={styles.timePickerText}>Select time: {formatTime(selectedTime)}</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Done button */}
            <TouchableOpacity
                style={styles.doneButton}
                onPress={() => {
                    navigation.navigate('Settings', { isNotificationOn: isNotificationOn });
                }}>
                <View style={styles.doneButtonView}>
                    <Text style={styles.donebuttonText}>Done</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: GlobalStyles.backgroundColor,
    },
    headerView: {
        flexDirection: 'row',
        paddingLeft: scaleSize(10),
        paddingTop: scaleSize(20),
        paddingBottom: scaleSize(20),
        alignItems: 'center',
    },
    headerText: {
        fontSize: scaleFont(GlobalStyles.headerTextFontSize),
        color: GlobalStyles.primaryColor,
        fontWeight: 'bold',
    },
    toggleNotificationText: {
        color: GlobalStyles.primaryColor,
        fontSize: scaleFont(GlobalStyles.internalTextFontSize),
    },
    toggleNotification: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: scaleSize(20),
        alignItems: 'center',
    },
    toggleButtonsView: {
        flexDirection: 'row',
    },
    separatorLine: {
        borderBottomColor: GlobalStyles.primaryColor,
        borderBottomWidth: 1,
        marginLeft: scaleSize(20),
        marginRight: scaleSize(20),
    },
    descriptionContainer: {
        padding: scaleSize(20),
    },
    timePickerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: scaleSize(20),
        alignItems: 'center',
    },
    timePickerText: {
        color: GlobalStyles.primaryColor,
        fontSize: scaleFont(20),
    },
    timePickerButtonBorder: {
        borderColor: GlobalStyles.primaryColor,
        borderWidth: 1,
        borderRadius: GlobalStyles.borderRadiusSmall,
        paddingHorizontal: width * 0.1,
        paddingVertical: scaleSize(10),
        alignItems: 'center',
    },
    timePickerButtonView: {
        alignItems: 'center',
        borderRadius: 10,
    },
    doneButton: {
        marginTop: scaleSize(20),
        alignSelf: 'center',
    },
    doneButtonView: {
        backgroundColor: GlobalStyles.primaryColor,
        paddingVertical: scaleSize(10),
        paddingHorizontal: width * 0.4,
        alignItems: 'center',
        borderRadius: GlobalStyles.borderRadiusSmall,
    },
    donebuttonText: {
        color: GlobalStyles.backgroundColor,
        fontWeight: 'bold',
        fontSize: scaleFont(GlobalStyles.componentsTextFontSize),
    },
});

export default Notifications;














{/* the new time picker */}
{/*<View>
<timePicker selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
</View>*/}


{/* old toggle logic */}
{/*
const toggleNotification = () => {
    setIsNotificationOn(!isNotificationOn);
};
*/}