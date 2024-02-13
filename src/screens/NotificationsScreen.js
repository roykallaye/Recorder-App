import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import GlobalStyles from '../constants/GlobalStyles';

const { width, height } = Dimensions.get('window');

const scaleFont = (size) => size * (width / 375);
const scaleSize = (size) => size * (width / 375);
const scaleHeight = (size) => size * (height / 667);

const Notifications = () => {
    const navigation = useNavigation();
    const [isNotificationOn, setIsNotificationOn] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null);

    const toggleNotification = (newState) => {
        setIsNotificationOn(newState);
        if (!newState) {
            setShowTimePicker(false);
            setSelectedTime(null);
        }
    };

    const toggleTimePicker = () => {
        setShowTimePicker(!showTimePicker);
    };

    const onTimeChange = (event, selectedDate) => {
        setShowTimePicker(Platform.OS === 'ios');
        if (selectedDate) {
            setSelectedTime(selectedDate);
        }
    };

    const displayTimeText = () => selectedTime ? selectedTime.toLocaleTimeString() : 'Select time';

    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <StatusBar style={GlobalStyles.backgroundColor} />

            {/* header */}
            <View style={styles.headerView}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="chevron-back-outline" size={GlobalStyles.externalIconSize} color={GlobalStyles.primaryColor} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Notifications</Text>
            </View>
            
            {/* Toggle and Time Picker Section */}
            <View style={styles.toggleNotification}>
                <Text style={styles.toggleNotificationText}>Notification</Text>
                <View style={styles.toggleButtonsView}>
                    <TouchableOpacity onPress={() => toggleNotification(true)}>
                        <Text style={{ fontSize: GlobalStyles.componentsTextFontSize, color: isNotificationOn ? GlobalStyles.primaryColor : GlobalStyles.grayOutColor }}>ON </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleNotification(false)}>
                        <Text style={{ fontSize: GlobalStyles.componentsTextFontSize, color: isNotificationOn ? GlobalStyles.grayOutColor : GlobalStyles.primaryColor }}> OFF</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Separator line */}
            <View style={styles.separatorLine} />
            
            {/* Description */}
            <View style={styles.descriptionContainer}>
                <Text style={{ color: isNotificationOn ? GlobalStyles.primaryColor : GlobalStyles.grayOutColor, fontSize: GlobalStyles.internalTextFontSize, marginTop: 15, textAlign: 'justify' }}>
                    Customize your stress management routine by setting your preferred time to receive your daily notification.
                </Text>
            </View>
            
            {/* Select time button */}
            {isNotificationOn && (
                <View>
                    <View style={styles.timePickerView}>
                        <Text style={styles.timePickerText}>Set notification time</Text>
                        <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.timePickerButtonBorder} >
                            <Text style={styles.timePickerText}>{displayTimeText()}</Text>
                        </TouchableOpacity>
                        {showTimePicker && (
                            <DateTimePicker
                                value={selectedTime || new Date()}
                                mode="time"
                                display={Platform.OS === 'android' ? 'spinner' : 'default'}
                                onChange={onTimeChange}
                                onTouchCancel={() => setShowTimePicker(false)} // For iOS, to handle cancel
                            />
                        )}
                    </View>

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
                </View>
            )}
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
        paddingHorizontal: width * 0.06,
        paddingVertical: scaleSize(10),
        top: scaleHeight(50),
        right: scaleSize(87.75)
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
        marginTop: height * 0.3,
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