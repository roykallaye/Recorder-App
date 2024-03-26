import React, { useState } from 'react';
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
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={GlobalStyles.backgroundColor} />

            {/* header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="chevron-back-outline" size={GlobalStyles.externalIconSize} color={GlobalStyles.primaryColor} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Settings</Text>
            </View>

            <View style={styles.tabsContainer}>
                {/* notification Settings Tab */}
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={styles.tab}>
                    <Text style={styles.tabText}>Set Notifications</Text>
                    <Text style={styles.tab1Status}>{isNotificationOn ? 'ON' : 'OFF'}</Text>
                </TouchableOpacity>

                <View style={styles.separatorLine} />

                {/* other Settings Tab */}
                <TouchableOpacity onPress={() => navigation.navigate('VideoScreen')} style={styles.tab}>
                    <Text style={styles.tabText}>How Speak Out Works</Text>
                    <Icon name="chevron-forward-outline" size={GlobalStyles.internalIconSize} color={GlobalStyles.primaryColor} />
                </TouchableOpacity>
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
        justifyContent: 'flex-start',
    },
    headerText: {
        fontSize: scaleFont(GlobalStyles.headerTextFontSize),
        color: GlobalStyles.primaryColor,
        fontWeight: 'bold',
    },
    tabsContainer: {
        flex: 1,
        paddingHorizontal: GlobalStyles.padding,

    },
    tab: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: GlobalStyles.padding,
        alignItems: 'center',
    },
    tabText: {
        color: GlobalStyles.primaryColor,
        fontSize: scaleFont(GlobalStyles.internalTextFontSize),
    },
    tab1Status: {
        fontSize: scaleFont(GlobalStyles.internalTextFontSize),
        color: GlobalStyles.primaryColor,
    },
    separatorLine: {
        borderBottomColor: GlobalStyles.primaryColor,
        borderBottomWidth: 1,
    },
});

export default Settings;
