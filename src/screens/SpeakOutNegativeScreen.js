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

      {/* header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={GlobalStyles.externalIconSize} color={GlobalStyles.primaryColor} />
        </TouchableOpacity>

        <Text style={styles.date}>{currentDate}</Text>

        <InfoModal
          text={`Reflecting on Negative Thoughts\n\nThis prompt encourages you to identify and voice out up to three negative thoughts you've had in the past day. Recognizing these thoughts is the first step in a mindful approach to understanding your patterns of thinking that may affect your well-being.\n\n- Simply press the 'Start Now' button and use the microphone to record your thoughts. This can help you externalize what's on your mind and may bring clarity.\n\n- Remember, this is a personal tool for your reflection. No one else will hear these recordings unless you choose to share them.\n\n- If you're finding it difficult to articulate your thoughts, take a moment to breathe deeply and let your thoughts flow naturally. There's no right or wrong here, only your honest feelings.`}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />

      </View>

      {/* displayed question container */}
      <View style={styles.questionContainer}>
        <Text style={styles.text}>
        What were three negative thoughts you had in the last 24 hours?
        </Text>
      </View>

      {/* waveform container */}
      <View style={styles.waveformContainer}>
        <DynamicWaveform isRecording={recording} />
      </View>

      {/* recorder button container */}
      <View style={styles.recorderButtonContainer}>
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scaleSize(GlobalStyles.paddingHorizontal),
  },
  date: {
    color: GlobalStyles.primaryColor,
    fontSize: scaleFont(GlobalStyles.headerTextFontSize),
    fontWeight: 'bold'
  },
  questionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: GlobalStyles.padding
  },
  text: {
    color: GlobalStyles.directTextColor,
    fontSize: scaleFont(GlobalStyles.recorderScreenText),
    fontWeight: 'bold',
    textAlign: 'left',
  },
  waveformContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: GlobalStyles.padding
  },
  recorderButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: GlobalStyles.primaryColor,
    borderRadius: 50,
    width: scaleSize(100),
    height: scaleSize(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: GlobalStyles.primaryColor,
    fontSize: scaleFont(GlobalStyles.smallObjectTextSize),
    fontWeight: 'bold',
    alignItems: 'center',
    bottom: scaleHeight(65),
  },
  buttonIcon: {
    position: 'absolute',
    top: 'auto',
    left: 'auto',
  }
});