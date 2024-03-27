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
          text={`Box Breathing Technique\n\nBox breathing is a technique for regaining calm and focus, used in high-stress professions. It involves a cycle of inhaling through the nose for four seconds, holding the breath for four, exhaling slowly through the mouth for four, and holding again for four. This cycle, repeated several times, helps calm nerves and improves focus. It's an effective tool for stress relief and concentration.\n\nTap 'Watch Now' for a brief introduction to Fresh Soul and begin capturing your thoughts with ease.`}
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