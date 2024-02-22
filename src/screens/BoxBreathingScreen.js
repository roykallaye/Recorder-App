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
        text="Text for this screen"
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
    backgroundColor: GlobalStyles.boxBreathingColor,
    borderTopLeftRadius: scaleSize(GlobalStyles.borderRadiusLarge),
    borderTopRightRadius: scaleSize(GlobalStyles.borderRadiusLarge)
  },
  descriptionContainer: {
    padding: scaleSize(GlobalStyles.paddingHorizontal)
  },
  description: {
    color: GlobalStyles.directTextColor,
    fontSize: scaleFont(GlobalStyles.directDescriptionFontSize),
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  taskContainer: {
    padding: scaleSize(GlobalStyles.paddingHorizontal)
  },
  taskDetails: {
    color: GlobalStyles.directTextColor,
    fontSize: scaleFont(GlobalStyles.directTaskFontSize),
    textAlign: 'justify',
    paddingBottom: scaleSize(GlobalStyles.padding),
  },
});