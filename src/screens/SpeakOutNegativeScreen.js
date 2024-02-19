import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import InfoModal from '../components/infoModal';
import DynamicWaveform from '../components/DynamicWaveform';
import GlobalStyles from '../constants/GlobalStyles';

const { width, height } = Dimensions.get('window');

const scaleFont = (size) => size * (width / 375);

const scaleSize = (size) => size * (width / 375);
const scaleHeight = (size) => size * (height / 667); // Based on standard iPhone 6/7/8 height for scaling

export default function SpeakOutNegative() {
  const navigation = useNavigation();
  const [recording, setRecording] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-EU', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    setCurrentDate(formattedDate);
  }, []);

  const handleRecording = () => {
    setRecording(!recording);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={GlobalStyles.externalIconSize} color={GlobalStyles.primaryColor} />
        </TouchableOpacity>
        <Text style={styles.date}>{currentDate}</Text>
        <InfoModal
          text="Custom text for this screen"
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          {recording ? "I hear you.." : "What's on your mind?"}
        </Text>
        <DynamicWaveform isRecording={recording} />
        <TouchableOpacity style={styles.button} onPress={handleRecording}>
          <Text style={styles.buttonText}>{recording ? "Stop" : "Start Now"}</Text>
          <View style={styles.buttonIcon}>
            <Icon name={recording ? 'pause' : 'mic'} size={GlobalStyles.recorderIconSize} color={GlobalStyles.backgroundColor} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.backgroundColor,
  },
  header: {
    height: scaleHeight(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaleSize(20),
    paddingVertical: scaleSize(10),
  },
  date: {
    color: GlobalStyles.primaryColor,
    fontSize: scaleFont(GlobalStyles.internalTextFontSize),
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    paddingHorizontal: scaleSize(20),
    paddingVertical: scaleHeight(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: GlobalStyles.directTextColor,
    fontSize: scaleFont(GlobalStyles.recorderScreenText),
    fontWeight: 'bold',
    textAlign: 'left',
    bottom: scaleHeight(170),
  },
  button: {
    backgroundColor: GlobalStyles.primaryColor,
    borderRadius: 50,
    width: scaleSize(100),
    height: scaleSize(100),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scaleSize(20),
    top: scaleHeight(180),
  },
  buttonText: {
    color: GlobalStyles.backgroundColor,
    fontSize: scaleFont(GlobalStyles.smallObjectTextSize),
    fontWeight: 'bold',
    bottom: scaleHeight(65),
  },
  buttonIcon: {
    position: 'absolute',
    top: 'auto',
    left: 'auto',
  }
});