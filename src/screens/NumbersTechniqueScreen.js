import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import InfoModal from '../components/infoModal';
import GlobalStyles from '../constants/GlobalStyles';

const { width, height } = Dimensions.get('window');

const scaleFont = (size) => size * (width / 375);

const scaleSize = (size) => size * (width / 375);

export default function NumbersTechnique() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={GlobalStyles.externalIconSize} color={GlobalStyles.primaryColor} />
        </TouchableOpacity>
        <Text style={styles.headerText}>5-4-3-2-1</Text>

        <InfoModal
        text="Text for this screen"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      </View>


      <ScrollView style={styles.ScrollView}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>The 5-4-3-2-1 technique is a powerful method to anchor yourself in the present moment and shift your focus away from sources of anxiety or stress.</Text>
          <Text style={styles.description}>Start by taking two deep breaths to center yourself. Then, with your eyes closed, mentally imagine yourself doing the following:</Text>
        </View>

        <View style={styles.taskContainer}>
          <Text style={styles.taskDetails}><Text style={{fontWeight: 'bold'}}>5. </Text>Acknowledge <Text style={{fontWeight: 'bold'}}>FIVE</Text> things you see around you. Focus on observing the small details of these objects.</Text>
          <Text style={styles.taskDetails}><Text style={{fontWeight: 'bold'}}>4. </Text>Acknowledge <Text style={{fontWeight: 'bold'}}>FOUR</Text> things you can touch around you. Mentally feel their texture and contemplate the sensation.</Text>
          <Text style={styles.taskDetails}><Text style={{fontWeight: 'bold'}}>3. </Text>Acknowledge <Text style={{fontWeight: 'bold'}}>THREE</Text> things you hear. Try to identify and distinguish between the various sounds in your environment.</Text>
          <Text style={styles.taskDetails}><Text style={{fontWeight: 'bold'}}>2. </Text>Acknowledge <Text style={{fontWeight: 'bold'}}>TWO</Text> things you can smell. Think of any scents around you or your favorite familiar smells.</Text>
          <Text style={styles.taskDetails}><Text style={{fontWeight: 'bold'}}>1. </Text>Acknowledge <Text style={{fontWeight: 'bold'}}>ONE</Text> thing you can taste. This could be the residual taste of a recent meal or drink, or simply the taste of your mouth at the moment.</Text>
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
    backgroundColor: GlobalStyles.numbersTechniqueColor,
    borderTopLeftRadius: scaleSize(GlobalStyles.borderRadiusLarge),
    borderTopRightRadius: scaleSize(GlobalStyles.borderRadiusLarge),
  },
  descriptionContainer: {
    padding: scaleSize(GlobalStyles.paddingHorizontal)
  },
  description: {
    color: GlobalStyles.directTextColor,
    fontSize: scaleFont(GlobalStyles.directDescriptionFontSize),
    fontWeight: 'bold',
    textAlign: 'justify',
    paddingBottom: scaleSize(GlobalStyles.padding)
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