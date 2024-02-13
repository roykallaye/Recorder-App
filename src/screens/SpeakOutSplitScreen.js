import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import InfoModal from '../components/infoModal';
import GlobalStyles from '../constants/GlobalStyles';

// Get device width and height
const { width, height } = Dimensions.get('window');

// Scale function for font sizes
const scaleFont = (size) => size * (width / 375);

// Scale function for padding, margins, sizes, and positions
const scaleSize = (size) => size * (width / 375);
const scaleHeight = (size) => size * (height / 667); // Based on standard iPhone 6/7/8 height for scaling

export default function SpeakOutSplit() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={GlobalStyles.backgroundColor} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={GlobalStyles.externalIconSize} color={GlobalStyles.primaryColor} />
        </TouchableOpacity>
        <InfoModal
        text="Custom text for this screen"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      </View>
      <TouchableOpacity 
        style={styles.negContainer}
        onPress={() => navigation.navigate('SpeakOutNegative')}
      >
        <Text style={styles.negText}>Speak out your negative thoughts</Text>
        <Text style={styles.guideText}>Click to Start {'>'}</Text>
      </TouchableOpacity>
      <View style={styles.separatorLine} />
      <TouchableOpacity 
        style={styles.posContainer}
        onPress={() => navigation.navigate('SpeakOutPositive')}
      >
        <Text style={styles.posText}>Speak out your positive thoughts</Text>
        <Text style={styles.guideText}>Click to Start {'>'}</Text>
      </TouchableOpacity>
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
  negContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  negText: {
    color: GlobalStyles.primaryColor,
    fontSize: scaleFont(GlobalStyles.bigInternalTextFontSize),
    textAlign: 'center',
    bottom: scaleHeight(20),
  },
  guideText: {
    color: GlobalStyles.primaryColor,
    top: scaleHeight(50),
    textDecorationLine: 'underline',
  },
  separatorLine: {
    borderTopWidth: 1,
    borderTopColor: GlobalStyles.primaryColor,
  },
  posContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.speakOutColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  posText: {
    color: GlobalStyles.primaryColor,
    fontSize: scaleFont(GlobalStyles.bigInternalTextFontSize),
    textAlign: 'center',
    bottom: scaleHeight(20),
  },
});