import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import InfoModal from '../components/infoModal';
import GlobalStyles from '../constants/GlobalStyles';

const { width, height } = Dimensions.get('window');

const scaleFont = (size) => size * (width / 375);

const scaleSize = (size) => size * (width / 375);
const scaleHeight = (size) => size * (height / 667); // Based on standard iPhone 6/7/8 height for scaling

export default function SpeakOutSplit() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <SafeAreaView style={styles.container}>

      {/* header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={GlobalStyles.externalIconSize} color={GlobalStyles.primaryColor} />
        </TouchableOpacity>

        <InfoModal
        text="Custom text for this screen"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      </View>

      {/* main internal container */}
      <View style={styles.internalContainer}>

        {/* negative container */}
        <View style={styles.negContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('SpeakOutNegative')}>
            <View style={styles.insideContainersUpper}>
              <Text style={styles.negText}>Speak out your negative thoughts</Text>
            </View>

            <View style={styles.insideContainersLower}>
              <Text style={styles.guideText}>Click to Start {'>'}</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* separator */}
        <View style={styles.separatorLine} />

        {/* positive container */}
        <View style={styles.posContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('SpeakOutPositive')}>
            <View style={styles.insideContainersUpper}>
            <Text style={styles.posText}>Speak out your positive thoughts</Text>
            </View>

            <View style={styles.insideContainersLower}>
            <Text style={styles.guideText}>Click to Start {'>'}</Text>
            </View>
          </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: GlobalStyles.backgroundColor
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scaleSize(GlobalStyles.paddingHorizontal)
  },
  internalContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  negContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  insideContainersUpper: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  insideContainersLower: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  negText: {
    color: GlobalStyles.primaryColor,
    fontSize: scaleFont(GlobalStyles.bigInternalTextFontSize),
    textAlign: 'center'
  },
  guideText: {
    color: GlobalStyles.primaryColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  separatorLine: {
    borderTopWidth: 1,
    borderTopColor: GlobalStyles.primaryColor
  },
  posContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: GlobalStyles.speakOutColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  posText: {
    color: GlobalStyles.primaryColor,
    fontSize: scaleFont(GlobalStyles.bigInternalTextFontSize),
    textAlign: 'center'
  }
});