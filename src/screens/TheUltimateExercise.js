import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import InfoModal from '../components/infoModal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalStyles from '../constants/GlobalStyles';

const { width } = Dimensions.get('window');

const scaleFont = (size) => size * (width / 375);

const scaleSize = (size) => size * (width / 375);

export default function TheUltimateExercise() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [visibilityState, setVisibilityState] = useState({
    task1: false,
    task2: false,
    task3: false,
    meditation: false,
  });

  const toggleTextVisibility = (sectionKey) => {
    setVisibilityState((prevState) => ({
      ...prevState,
      [sectionKey]: !prevState[sectionKey],
    }));
  };

  useEffect(() => {
    return () => {
      setVisibilityState({
        task1: false,
        task2: false,
        task3: false,
        meditation: false
      });
    };
  }, []);

  return (
    <SafeAreaView style={styles.Container}>

      {/* header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={GlobalStyles.externalIconSize} color={GlobalStyles.primaryColor} />
        </TouchableOpacity>
        <Text style={styles.headerText}>The Ultimate Exercise</Text>

        <InfoModal
          text={`The Ultimate Exercise\n\nTap 'Watch Now' for an introduction to Fresh Soul and begin capturing your thoughts with ease.`}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />

      </View>

      {/* description container */}
      <ScrollView style={styles.ScrollView}>
    
        {/* Description Section */}
        <View style={styles.descriptionContainer}>
        <Text style={styles.description}><Text style={{fontWeight: 'bold'}}>Description:</Text></Text>
        <Text style={styles.description}>Taking care of our mental health should be part of our everyday life, just like working out or eating healthy. Embracing it can profoundly transform our lives. Let's break down what an ultimate exercise could be,</Text>
        </View>
        
        {/* Morning Section */}
        <View style={styles.descriptionContainer}>
        <Text style={styles.description}><Text style={{fontWeight: 'bold'}}>Morning:</Text></Text>
        <Text style={styles.description2}>Morning routines are really important for our mental health because our stress hormone, cortisol, is highest when we wake up. Doing things like exercise, meditation, or yoga can help bring it down, making us feel happier and calmer throughout the day.</Text>
        
        {/* Task 1 */}
        <View style={styles.taskDetails}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.taskDetails2}>
              1- Start with Forward Motion
            </Text>
            <TouchableOpacity onPress={() => toggleTextVisibility('task1')}>
              <Ionicons name="information-circle-outline" size={GlobalStyles.directTaskFontSize} color={GlobalStyles.directTextColor} />
            </TouchableOpacity>
          </View>
          {visibilityState.task1 && (
          <Text style={styles.taskDetails}>
            Forward motion means starting your day by moving ahead both physically and mentally. Without checking your phone, go for a 30-minute walk right after you wake up. This walk is not just about physical activity; it's also about getting some sunlight, which is highly beneficial even on cloudy days. Beginning your day this way helps manage your cortisol levels and boosts your mood.
          </Text>
          )}
        </View>

        
        {/* Task 2 */}
        <View style={styles.taskDetails}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.taskDetails2}>
            2- Follow it by a Body Scan
            </Text>
            <TouchableOpacity onPress={() => toggleTextVisibility('task2')}>
              <Ionicons name="information-circle-outline" size={GlobalStyles.directTaskFontSize} color={GlobalStyles.directTextColor} />
            </TouchableOpacity>
          </View>
          {visibilityState.task2 && (
          <Text style={styles.taskDetails}>
          The body scan is a great start to mindfulness meditation. It's about tuning into your body, reconnecting with yourself, and noticing how you feel without judging. This practice has many benefits. Try it out to feel its powerful effects. Look up a 15-20 minute body scan exercise online for a meaningful impact.
          </Text>
          )}
        </View>
        
        {/* Task 3 */}
        <View style={styles.taskDetails}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.taskDetails2}>
            3- Or, try Mindful Breathing
            </Text>
            <TouchableOpacity onPress={() => toggleTextVisibility('task3')}>
              <Ionicons name="information-circle-outline" size={GlobalStyles.directTaskFontSize} color={GlobalStyles.directTextColor} />
            </TouchableOpacity>
          </View>
          {visibilityState.task3 && (
          <Text style={styles.taskDetails}>
          Mindful breathing is a powerful form of mindfulness meditation. The core of this practice is to concentrate on your breath, paying attention to the natural pace of your inhales and exhales and the sensations they create. This focus acts as an anchor, offering a point of calm you can return to when stress or negative feelings overwhelm you. The goal is to give your mind a rest from constant thinking by centering on your breathing. We recommend dedicating 10-15 minutes to mindful breathing exercises to experience their full benefit.
          </Text>
          )}
        </View>
        </View>

        {/* Throughout the Day Section */}
        <View style={styles.descriptionContainer}>
        <Text style={styles.description}><Text style={{fontWeight: 'bold'}}>Throughout the day:</Text></Text>
        <Text style={styles.description2}>In our busy days, we often forget to take a moment to breathe properly. Stress often builds up around our belly, and taking deep breaths is a powerful way to release this tension. It’s important to pause and clear our minds with a few exercises. These breaks can refresh us and improve focus and well-being.</Text>
        
        {/* Additional tasks listed without detailed explanations */}
        <Text style={styles.taskDetails}><Text style={{fontWeight: 'bold'}}>4- </Text>Try the Single Object Exercise</Text>
        <Text style={styles.taskDetails}><Text style={{fontWeight: 'bold'}}>5- </Text>Follow it with the 5-4-3-2-1 Exercise</Text>
        <Text style={styles.taskDetails}><Text style={{fontWeight: 'bold'}}>6- </Text>Then try the Box Breathing</Text>
        </View>

        {/* Evening Section */}
        <View style={styles.descriptionContainer}>
        <Text style={styles.description}><Text style={{fontWeight: 'bold'}}>Evening:</Text></Text>
        <Text style={styles.description2}>After a busy day, it’s crucial to take a moment to reflect on the past 24 hours by sharing three negative and three positive experiences. This Speak Out exercise is essential for keeping our mental health sharp. It helps us process our day, acknowledge our feelings, and find balance.</Text>
        </View>

        {/* Before Bed Section */}
        <View style={styles.descriptionContainer}>
        <Text style={styles.description}><Text style={{fontWeight: 'bold'}}>Before Bed:</Text></Text>
        <Text style={styles.description2}>To ensure a good night's sleep, it's important to manage our stress levels. This can be achieved by practicing a few exercises designed to relax the mind and body.</Text>
        
        {/* Pre-Bedtime tasks */}
        <Text style={styles.taskDetails}><Text style={{fontWeight: 'bold'}}>7- </Text>Go out for a walk</Text>
        <Text style={styles.taskDetails}><Text style={{fontWeight: 'bold'}}>8- </Text>Follow it by a Body Scan</Text>
        <View style={styles.taskDetails}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{color: GlobalStyles.directTextColor, fontSize: scaleFont(GlobalStyles.directTaskFontSize), marginRight: 10,}}>
            <Text style={{fontWeight: 'bold'}}>9-</Text> Or, try Meditation for Abundance and Gratitude
            </Text>
            <TouchableOpacity onPress={() => toggleTextVisibility('meditation')}>
              <Ionicons name="information-circle-outline" size={GlobalStyles.directTaskFontSize} color={GlobalStyles.directTextColor} />
            </TouchableOpacity>
            </View>
            {visibilityState.meditation && (
              <Text style={styles.taskDetails}>
                That's a wonderful exercise we highly recommend. It's sure to bring a smile to your face. Picture yourself in your ideal spot, surrounded by love. This exercise is just as powerful in the morning. Find a 15-20 minute Meditation for Abundance and Gratitude online for a truly transformative effect.
              </Text>
            )}
            </View>

            <Text style={styles.description2}>
              Remember, the goal isn't to do everything at once—feeling overwhelmed is the last thing we want. You don't have to try all these exercises. Just picking a few that resonate with you can make a big difference in maintaining your best mental health. It's about finding what works for you and making it a part of your daily routine.
            </Text>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: GlobalStyles.backgroundColor,
  },
  headerContainer: {
    padding: scaleSize(GlobalStyles.paddingHorizontal),
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: scaleFont(GlobalStyles.headerTextFontSize),
    fontWeight: 'bold',
    color: GlobalStyles.primaryColor,
  },
  ScrollView: {
    backgroundColor: GlobalStyles.primaryColor,
    borderTopLeftRadius: scaleSize(GlobalStyles.borderRadiusLarge),
    borderTopRightRadius: scaleSize(GlobalStyles.borderRadiusLarge),
  },
  descriptionContainer: {
    padding: scaleSize(GlobalStyles.paddingHorizontal),
  },
  description: {
    color: GlobalStyles.directTextColor,
    fontSize: scaleFont(GlobalStyles.directDescriptionFontSize),
  },
  description2: {
    color: GlobalStyles.directTextColor,
    fontSize: scaleFont(GlobalStyles.directTaskFontSize),
    paddingBottom: scaleSize(GlobalStyles.padding),
  },
  taskContainer: {
    paddingHorizontal: scaleSize(GlobalStyles.paddingHorizontal),
  },
  taskDetails: {
    color: GlobalStyles.directTextColor,
    fontSize: scaleFont(GlobalStyles.directTaskFontSize),
    paddingBottom: scaleSize(GlobalStyles.padding),
  },
  taskDetails2: {
    color: GlobalStyles.directTextColor,
    fontSize: scaleFont(GlobalStyles.directTaskFontSize),
    fontWeight: 'bold',
    marginRight: 10,
  }
});