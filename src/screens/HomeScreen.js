import React from 'react';
import { View, Text, Image,  StyleSheet, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import GlobalStyles from '../constants/GlobalStyles';

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
    </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.backgroundColor,
    padding: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 20
  },  
  greeting: {
    fontSize: 40,
    fontWeight: 'bold',
    color: GlobalStyles.directTextColor,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '49%', // Keeps cards responsive across screen sizes
    padding: 15,
    borderRadius: GlobalStyles.borderRadiusMedium,
    marginBottom: 6,
  },
  blueCard: {
    backgroundColor: GlobalStyles.speakOutColor,
    height: height * 0.35, // Dynamic height based on screen size
  },
  purpleCard: {
    backgroundColor: GlobalStyles.boxBreathingColor,
    height: height * 0.25, // Dynamic height
    marginTop: 100,
  },
   pinkCard:{
     backgroundColor: GlobalStyles.numbersTechniqueColor,
     height: height * 0.25,
     marginTop: -22
   },
   yellowCard:{
     backgroundColor: GlobalStyles.singleObjectColor,
     height: height * 0.35,
     marginTop: 1
   },
   cardTitle: {
    fontSize: GlobalStyles.componentsTextFontSize,
    fontWeight: 'bold',
    color: GlobalStyles.directTextColor,
    alignSelf: 'flex-start',
    textAlign: 'left',
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
    padding: 2,
    paddingHorizontal: 5,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 4,
  },
  imageStyle: {
    position: 'absolute',
    bottom: 20,
    left: '30%',
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
  },
});

export default Home;
