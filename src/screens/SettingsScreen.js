import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles from '../constants/GlobalStyles';

// Get device width and height
const { width, height } = Dimensions.get('window');

// Scale function for font sizes
const scaleFont = (size) => size * (width / 375);

// Scale function for padding and margins
const scaleSize = (size) => size * (width / 375);

const Settings = ({ route, navigation }) => {
    const [isNotificationOn, setIsNotificationOn] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            const loadNotificationState = async () => {
                const savedNotificationState = await AsyncStorage.getItem('isNotificationOn');
                setIsNotificationOn(savedNotificationState === 'true');
            };
    
            loadNotificationState();
        }, [])
    );

    // useEffect(() => {
    //     if (route.params?.isNotificationOn !== undefined && route.params?.selectedTime) {
    //         // Assuming you have state hooks for these
    //         setIsNotificationOn(route.params.isNotificationOn);
    //         setSelectedTime(new Date(route.params.selectedTime));
    //         // Perform any additional actions as needed, like updating the UI
    //     }
    // }, [route.params?.isNotificationOn, route.params?.selectedTime]);

    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <StatusBar backgroundColor={GlobalStyles.backgroundColor} />

            {/* header */}
            <View style={styles.headerView}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="chevron-back-outline" size={GlobalStyles.externalIconSize} color={GlobalStyles.primaryColor} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Settings</Text>
            </View>

            {/* notification Settings Tab */}
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={styles.tab}>
                <Text style={styles.tabText}>Set notifications</Text>
                <Text style={styles.tab1Status}>{isNotificationOn ? 'ON' : 'OFF'}</Text>
            </TouchableOpacity>

            <View style={styles.separatorLine} />

            {/* other Settings Tab */}
            <TouchableOpacity onPress={() => navigation.navigate('VideoScreen')} style={styles.tab}>
                <Text style={styles.tabText}>How it works</Text>
                <Icon name="chevron-forward-outline" size={GlobalStyles.internalIconSize} color={GlobalStyles.primaryColor} />
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
    tab: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: scaleSize(20),
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        fontSize: scaleFont(GlobalStyles.internalTextFontSize),
    },
    tab1Status: {
        fontSize: scaleFont(GlobalStyles.internalTextFontSize),
        color: GlobalStyles.primaryColor,
    },
    separatorLine: {
        borderBottomColor: GlobalStyles.primaryColor,
        borderBottomWidth: 1,
        marginLeft: scaleSize(20),
        marginRight: scaleSize(20),
    },
});

export default Settings;
