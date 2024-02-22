import { useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import GlobalStyles from '../constants/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const scaleFont = (size) => size * (width / 375);
const scaleSize = (size) => size * (width / 375);
const scaleHeight = (size) => size * (height / 667);

const TimePicker = ({selectedTime, setSelectedTime}) => {

    useEffect(() => {
        setSelectedTime(selectedTime);
    }, [selectedTime, setSelectedTime])

    const incrementHours = () => {
        setSelectedTime((prevTime) => {
            const newHours = (prevTime.hours % 12)+1;
            return { ...prevTime, hours: newHours }
        })
    }

    const decrementHours = () => {
        setSelectedTime((prevTime) => {
            const newHours = prevTime.hours === 1 ? 12: prevTime.hours-1;
            return { ... prevTime, hours: newHours }
        })
    }

    const incrementMinutes = () => {
        setSelectedTime((prevTime) => {
            const newMinutes = prevTime.minutes === 59 ? 0 : prevTime.minutes + 1;
            return { ...prevTime, minutes: newMinutes }
        })
    }

    const decrementMinutes = () => {
        setSelectedTime((prevTime) => {
            const newMinutes = prevTime.minutes === 0 ? 59 : prevTime.minutes - 1;
            return { ... prevTime, minutes: newMinutes }
        })
    }

    return (
        <View>
            <View>
                <Text style={styles.text}>Select Time</Text>
            </View>
            <View style={styles.timeContainer}>
                
                <View style={styles.timePicker}>
                    <View style={styles.pickerSection}>
                        <Pressable onPress={incrementHours}>
                            <Icon name="arrow-up-outline" size={20} color={GlobalStyles.primaryColor} />
                        </Pressable>
                        <Text style={styles.text}>{selectedTime.hours<10?`0${selectedTime.hours}`:`${selectedTime.hours}`}</Text>
                        <Pressable onPress={decrementHours}>
                            <Icon name="arrow-down-outline" size={20} color={GlobalStyles.primaryColor} />
                        </Pressable>
                    </View>
                    <View styles={styles.separator}>
                        <Text style={styles.text}>:</Text>
                    </View>
                    <View style={styles.pickerSection}>
                        <Pressable onPress={incrementMinutes}>
                            <Icon name="arrow-up-outline" size={20} color={GlobalStyles.primaryColor} />
                        </Pressable>
                        <Text style={styles.text}>{selectedTime.minutes<10?`0${selectedTime.minutes}`:`${selectedTime.minutes}`}</Text>
                        <Pressable onPress={decrementMinutes}>
                            <Icon name="arrow-down-outline" size={20} color={GlobalStyles.primaryColor} />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.dayPartContainer}>
                    <Pressable onPress={()=>{
                        setSelectedTime((prevTime)=>{
                            const newDayPart = prevTime.dayPart === 'AM' ? 'PM' : 'AM';
                            return { ...prevTime, dayPart: newDayPart }
                        })
                    }} style={styles.dayPartButton}>
                        <Text style={styles.dayPartText}>{selectedTime.dayPart}</Text>
                        
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: scaleSize(30),
        backgroundColor: GlobalStyles.backgroundColor,
    },
    text: {
        color: GlobalStyles.primaryColor,
        fontSize: scaleFont(16),
        letterSpacing: 0.5,
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scaleSize(8),
    },
    timePicker: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pickerSection: {
        alignItems: 'center',
        marginHorizontal: scaleSize(5),
    },
    arrowIcon: {
        width: scaleSize(25),
        height: scaleSize(25),
    },
    separator: {
        height: scaleHeight(40),
        alignItems: 'center',
        justifyContent: 'center',
    },
    dayPartContainer: {
        backgroundColor: GlobalStyles.primaryColor,
        elevation: 1,
        paddingHorizontal: scaleSize(5),
        borderRadius: scaleSize(3),
        marginLeft: scaleSize(8),
        height: scaleHeight(40),
        alignItems: 'center',
        justifyContent: 'center',
    },
    dayPartButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    syncIcon: {
        width: scaleSize(18),
        height: scaleSize(18),
        marginBottom: scaleSize(2),
        marginLeft: scaleSize(2),
        tintColor: 'gray',
    },
    dayPartText: {
        letterSpacing: 2,
        fontSize: scaleFont(15),
    },
});

export default TimePicker;