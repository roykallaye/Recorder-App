import React from 'react';
import { View, Text, Image,  StyleSheet, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import GlobalStyles from '../constants/GlobalStyles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// Get device width and height
const { width, height } = Dimensions.get('window');

const Home = () => {
    const navigation = useNavigation();
  
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#8790FF" />

        {/* header container */}
        <View style={styles.headerContainer}>
          <Text style={styles.greeting}>Welcome,</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Feather name="settings" size={GlobalStyles.externalIconSize} color="white" />
          </TouchableOpacity>
        </View>

        {/* card container */}
        <View style={styles.cardContainer}>

          <View style={styles.cardContainerLeft}>
            <View style={styles.cardContainerLeft1}>
              {/* blue card */}
              <TouchableOpacity 
                style={[styles.card, styles.blueCard]}
                onPress={() => navigation.navigate('SpeakOutSplit')}
              >
                <Text style={styles.cardTitle}>Speak out</Text>
                <Image 
                    source={require('../../assets/speakout.png')}
                    style={styles.imageStyle}
                />
                <View style={styles.whiteBackground}>
                <Text style={styles.cardDuration}>7 min</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.cardContainerLeft2}>
              {/* pink card */}
              <TouchableOpacity 
                style={[styles.card, styles.pinkCard]}
                onPress={() => navigation.navigate('NumbersTechnique')}
              >
                <Text style={styles.cardTitle}>5-4-3-2-1</Text>
                <Image 
                      source={require('../../assets/54321.png')}
                      style={styles.imageStyle}
                  />
                <View style={styles.whiteBackground}>
                  <Text style={styles.cardDuration}>3 min</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.cardContainerRight}>
            <View style={styles.cardContainerRight1}>
              {/* purple card */}
              <TouchableOpacity 
                style={[styles.card, styles.purpleCard]}
                onPress={() => navigation.navigate('BoxBreathing')}
              >
                <Text style={styles.cardTitle}>Box Breathing</Text>
                <Image 
                      source={require('../../assets/boxbreathing.png')}
                      style={styles.imageStyle}
                  />
                <View style={styles.whiteBackground}>
                  <Text style={styles.cardDuration}>4 min</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.cardContainerRight2}>
              {/* yellow card */}
              <TouchableOpacity 
                style={[styles.card, styles.yellowCard]}
                onPress={() => navigation.navigate('SingleObject')}
              >
                <Text style={styles.cardTitle}>Single Object</Text>
                <Image 
                      source={require('../../assets/singleobject.png')}
                      style={styles.imageStyle}
                  />
                <View style={styles.whiteBackground}>
                  <Text style={styles.cardDuration}>2 min</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        
      </View>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.backgroundColor,
    paddingHorizontal: GlobalStyles.paddingHorizontal,
    paddingBottom: GlobalStyles.paddingBottom
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: GlobalStyles.bigInternalTextFontSize,
    fontWeight: 'bold',
    color: GlobalStyles.directTextColor,
  },
  cardContainer: {
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardContainerLeft: {
    flex: 1,
    flexDirection: 'column',
  },
  cardContainerLeft1: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  cardContainerLeft2: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  cardContainerRight: {
    flex: 1,
    flexDirection: 'column',
  },
  cardContainerRight1: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  cardContainerRight2: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  card: {
    width: '98%',
    padding: 15,
    borderRadius: GlobalStyles.borderRadiusMedium,
  },
  blueCard: {
    backgroundColor: GlobalStyles.speakOutColor,
    height: '98%',

  },
  purpleCard: {
    backgroundColor: GlobalStyles.boxBreathingColor,
    height: '80%',
  },
   pinkCard:{
     backgroundColor: GlobalStyles.numbersTechniqueColor,
     height: '75%',
   },
   yellowCard:{
     backgroundColor: GlobalStyles.singleObjectColor,
     height: '98%',
   },
   cardTitle: {
    fontSize: GlobalStyles.componentsTextFontSize,
    fontWeight: 'bold',
    color: GlobalStyles.directTextColor,
    alignSelf: 'flex-start',
  },
  cardDuration: {
    fontSize: GlobalStyles.durationTextSize,
    color: GlobalStyles.directTextColor,
    alignSelf: 'flex-start',
    textAlign: 'center',
  },
  whiteBackground: {
    backgroundColor: GlobalStyles.primaryColor,
    borderRadius: GlobalStyles.borderRadiusSmall,
    padding: 1,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  imageStyle: {
    position: 'absolute',
    bottom: 10,
    left: '30%',
    width: '70%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default Home;
