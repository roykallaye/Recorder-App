import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Dimensions, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { notificationService } from '../components/NotificationService';
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

    useEffect(() => {
        const loadSettings = async () => {
            const savedNotificationState = await AsyncStorage.getItem('isNotificationOn');
            const savedTime = await AsyncStorage.getItem('selectedTime');
    
            setIsNotificationOn(savedNotificationState === 'true');
            if (savedTime) {
                setSelectedTime(new Date(savedTime));
            }
        };
    
        loadSettings();
    }, []);

    const toggleNotification = async (newState) => {
        setIsNotificationOn(newState);
        if (newState) {
            // Before scheduling a new notification, cancel all existing ones
            notificationService.cancelAllNotifications();
    
            const permissionGranted = await notificationService.checkAndRequestPermissions();
            if (permissionGranted) {
                await AsyncStorage.setItem('isNotificationOn', 'true');
                setShowTimePicker(true);
                if (selectedTime) {
                    notificationService.scheduleNotification(selectedTime.getHours(), selectedTime.getMinutes());
                }
            } else {
                console.log("Permission not granted for notifications.");
                setIsNotificationOn(false);
                return;
            }
        } else {
            await AsyncStorage.setItem('isNotificationOn', 'false');
            setShowTimePicker(false);
            setSelectedTime(null);
            await AsyncStorage.removeItem('selectedTime');
    
            // Also cancel all notifications when turning off
            notificationService.cancelAllNotifications();
        }
    };    

    const onTimeChange = (event, selectedDate) => {
        setShowTimePicker(Platform.OS === 'ios');
        if (selectedDate) {
            setSelectedTime(selectedDate);
            AsyncStorage.setItem('selectedTime', selectedDate.toString());
    
            // Cancel any previously scheduled notifications before setting a new one
            notificationService.cancelAllNotifications();
            notificationService.scheduleNotification(selectedDate.getHours(), selectedDate.getMinutes());
        }
    };
    

    const displayTimeText = () => {
        if (selectedTime) {
          let hours = selectedTime.getHours();
          let minutes = selectedTime.getMinutes();
          const ampm = hours >= 12 ? 'PM' : 'AM';
          hours = hours % 12;
          hours = hours ? hours : 12; // the hour '0' should be '12'
          minutes = minutes < 10 ? '0' + minutes : minutes;
          return `${hours}:${minutes} ${ampm}`;
        } else {
          return 'Select time';
        }
      };
      
    return (
        <SafeAreaView style={styles.container}>
            
            {/* header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="chevron-back-outline" size={GlobalStyles.externalIconSize} color={GlobalStyles.primaryColor} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Notifications</Text>
            </View>
                
            <View style={styles.internalContainer}>
                {/* Toggle */}
                <View style={styles.tab}>
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
                    <Text style={{ color: isNotificationOn ? GlobalStyles.primaryColor : GlobalStyles.grayOutColor, fontSize: GlobalStyles.internalTextFontSize, paddingVertical: GlobalStyles.padding, textAlign: 'justify' }}>
                        Customize your stress management routine by setting your preferred time to receive your daily notification.
                    </Text>
                
                {/* Select time button */}
                {isNotificationOn && (
                    <View style={styles.setNotificationContainer}>
                        <View style={styles.timePickerContainer}>
                            <Text style={styles.timePickerText}>Set notification time</Text>
                            <View style={styles.timePickerButton}>
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
                        </View>

                        {/* Done button */}
                        <View style={styles.doneButtonContainer}>
                            <View style={styles.doneButtonView}>
                                <TouchableOpacity
                                    onPress={async () => {
                                        if (isNotificationOn && selectedTime) {
                                            // Save the notification state as 'ON' and the selected time
                                            await AsyncStorage.setItem('isNotificationOn', 'true');
                                            await AsyncStorage.setItem('selectedTime', selectedTime.toISOString()); // Save the selected time as a string
                                            console.log(selectedTime.toISOString());

                                            // Extract hour and minute from selectedTime and schedule the notification
                                            const hour = selectedTime.getHours();
                                            const minute = selectedTime.getMinutes();
                                            console.log('hour:', hour, '    minute:', minute);
                                            notificationService.scheduleNotification(hour, minute);
                                        }
                                        // Navigate back to the Settings screen
                                        navigation.navigate('Settings');
                                        // Optionally pass back the updated state if you plan to use it there
                                        // navigation.navigate('Settings', {
                                        //     isNotificationOn: isNotificationOn,
                                        //     selectedTime: selectedTime ? selectedTime.toISOString() : null, // Pass the selected time as ISO string or null if not set
                                        // });
                                    }}>
                                    <View>
                                        <Text style={styles.donebuttonText}>Done</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.backgroundColor,
    },
    headerContainer: {
        flexDirection: 'row',
        padding: GlobalStyles.padding,
        alignItems: 'center',
    },
    headerText: {
        fontSize: scaleFont(GlobalStyles.headerTextFontSize),
        color: GlobalStyles.primaryColor,
        fontWeight: 'bold',
    },
    internalContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: GlobalStyles.padding,
    },
    tab: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: GlobalStyles.padding,
        alignItems: 'center',
    },
    toggleNotificationText: {
        color: GlobalStyles.primaryColor,
        fontSize: scaleFont(GlobalStyles.internalTextFontSize),
    },
    toggleButtonsView: {
        flexDirection: 'row',
    },
    separatorLine: {
        borderBottomColor: GlobalStyles.primaryColor,
        borderBottomWidth: 1,
    },
    setNotificationContainer: {
        flex: 1,
        paddingBottom: GlobalStyles.padding
    },
    timePickerContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: GlobalStyles.padding,
    },
    timePickerText: {
        color: GlobalStyles.primaryColor,
        fontSize: scaleFont(GlobalStyles.componentsTextFontSize),
        padding: GlobalStyles.padding
    },
    timePickerButton: {
        flexDirection: 'row',
        padding: GlobalStyles.padding,
        alignItems: 'center',
    },
    timePickerButtonBorder: {
        borderColor: GlobalStyles.primaryColor,
        borderWidth: 2,
        borderRadius: GlobalStyles.borderRadiusSmall,
    },
    doneButtonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: GlobalStyles.padding,
    },
    doneButtonView: {
        backgroundColor: GlobalStyles.primaryColor,
        width: '100%',
        paddingVertical: scaleSize(15),
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