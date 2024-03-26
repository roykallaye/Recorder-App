import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import InfoModal from '../components/infoModal';
import GlobalStyles from '../constants/GlobalStyles';

const { width } = Dimensions.get('window');

const scaleFont = (size) => size * (width / 375);

const scaleSize = (size) => size * (width / 375);

export default function BoxBreathing() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.Container}>

      {/* header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={GlobalStyles.externalIconSize} color={GlobalStyles.primaryColor} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Box breathing</Text>

        <InfoModal
          text={`Box Breathing Technique\n\nBox breathing, also known as square breathing, is a simple but effective technique used to regain calm and focus. It's often used by athletes, police officers, and military personnel to reduce stress in challenging situations.\n\n- Inhale: Breathing in through your nose for four seconds allows you to take in oxygen steadily and prepare for a brief pause.\n\n- Hold: Pausing your breath for four seconds enables the oxygen to circulate throughout your bloodstream.\n\n- Exhale: Releasing the breath slowly through your mouth over four seconds helps to expel carbon dioxide and relaxes the mind and body.\n\n- Hold Again: Another pause for four seconds after exhaling helps regulate the breathing cycle and prepares you for the next breath.\n\nThis breathing exercise can be performed several times in a row to help calm nerves and improve focus. Use this tool anytime you feel stressed or need to concentrate.`}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />

      </View>

      {/* description container */}
      <ScrollView style={styles.ScrollView}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Box breathing is a simple yet powerful relaxation technique that can help manage stress and improve concentration.</Text>
        </View>

        <View style={styles.taskContainer}>
          <Text style={styles.taskDetails}><Text style={{fontWeight: 'bold'}}>Inhale. </Text>Breathe in through your nose for four seconds.</Text>

          <Text style={styles.taskDetails}><Text style={{fontWeight: 'bold'}}>Hold. </Text>Hold your breath for four seconds.</Text>

          <Text style={styles.taskDetails}><Text style={{fontWeight: 'bold'}}>Exhale. </Text>Slowly breathe out through your mouth for four seconds.</Text>

          <Text style={styles.taskDetails}><Text style={{fontWeight: 'bold'}}>Hold Again. </Text>Hold your breath again for four seconds.</Text>
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
    flexDirection: 'row',
    padding: scaleSize(GlobalStyles.paddingHorizontal),
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
    borderTopRightRadius: scaleSize(GlobalStyles.borderRadiusLarge)
  },
  descriptionContainer: {
    padding: scaleSize(GlobalStyles.paddingHorizontal)
  },
  description: {
    color: GlobalStyles.directTextColor,
    fontSize: scaleFont(GlobalStyles.directDescriptionFontSize),
  },
  taskContainer: {
    paddingHorizontal: scaleSize(GlobalStyles.paddingHorizontal)
  },
  taskDetails: {
    color: GlobalStyles.directTextColor,
    fontSize: scaleFont(GlobalStyles.directTaskFontSize),
    paddingBottom: scaleSize(GlobalStyles.padding),
  },
});