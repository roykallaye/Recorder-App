import React from 'react';
import { View, Text, Image,  StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import GlobalStyles from '../../GlobalStyles';

const Home = () => {
    const navigation = useNavigation();
  
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#8790FF" />
        <Text style={styles.greeting}>Welcome,</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Feather name="settings" size={GlobalStyles.externalIconSize} color="white" style={styles.settingsIcon} />
        </TouchableOpacity>
        <SafeAreaView style={styles.cardContainer}>
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
      </SafeAreaView>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.backgroundColor,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 40,
    fontWeight: 'bold',
    color: GlobalStyles.directTextColor,
    position: 'absolute',
    top: 50,
    left: 20,
  },
  settingsIcon: {
    position: 'absolute',
    left: 135,
  },
  cardContainer: {
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    marginTop : 100,
   },
   card: {
    width: '49%',
    padding: 15,
    borderRadius: GlobalStyles.borderRadiusMedium,
    marginBottom: 6,
  },
   blueCard:{
    backgroundColor: GlobalStyles.speakOutColor,
    height: 300
  },
   purpleCard:{
     backgroundColor: GlobalStyles.boxBreathingColor,
     height: 200,
     marginTop: 30
   },
   pinkCard:{
     backgroundColor: GlobalStyles.numbersTechniqueColor,
     height: 200
   },
   yellowCard:{
     backgroundColor: GlobalStyles.singleObjectColor,
     height: 300,
     marginTop: -70
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
    textAlign: 'left',
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
