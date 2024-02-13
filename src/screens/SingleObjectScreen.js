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

export default function SingleObject() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.headerView}>
        
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={GlobalStyles.externalIconSize} color={GlobalStyles.primaryColor} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Single Object</Text>

        <InfoModal
        text="Text for this screen"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      </View>

      <ScrollView style={styles.ScrollView}>
        <View style={styles.containerView}>
          <Text style={styles.description}>This exercise involves focusing your attention on a single object through mental visualization.</Text>

          <Text style={styles.description}>You will describe the object based on what you imagine seeing visually, feeling through your sense of touch, and even smelling, all in your mind.</Text>

          <Text style={styles.taskDetails}>Before you begin, take two deep breaths. Breathe in slowly, hold for a moment, and then exhale gently. This will help to calm your mind and sharpen your focus.</Text>

          <Text style={styles.taskDetails}>Now, select a small object to be the focus of your attention.</Text>

          <Text style={styles.taskDetails}>Without physically touching the object, mentally explore it, focusing on all of its details:</Text>

          <Text style={styles.taskDetails}>- What does it look like? Visualize its shape and color.</Text>
          <Text style={styles.taskDetails}>- Is the object straight, curved, or a combination of both?</Text>
          <Text style={styles.taskDetails}>- How does the surface appear in your mind? Imagine its texture - is it smooth, bumpy, rough, or otherwise?</Text>
          <Text style={styles.taskDetails}>- Are there shadows or reflections on its surface? How does the light interact with it?</Text>
          <Text style={styles.taskDetails}>- Imagine touching the object. What sensation do you feel - is it cold, warm, hard, soft?</Text>
          <Text style={styles.taskDetails}>- Think about its smell. Does it have a scent?</Text>

          <Text style={styles.taskDetails}>By taking a moment to breathe deeply and then engaging in this mental visualization, you enhance your mindfulness, allowing a deeper connection with the present moment and a more focused exploration of your imagined object.</Text>

        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: GlobalStyles.backgroundColor,
  },
  headerView: {
    padding: scaleSize(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: scaleFont(26),
    fontWeight: 'bold',
    color: GlobalStyles.primaryColor,
  },
  ScrollView: {
    backgroundColor: GlobalStyles.singleObjectColor,
    borderTopLeftRadius: scaleSize(GlobalStyles.borderRadiusLarge),
    borderTopRightRadius: scaleSize(GlobalStyles.borderRadiusLarge),
  },
  containerView: {
    padding: scaleSize(22),
  },
  description: {
    color: GlobalStyles.directTextColor,
    fontSize: scaleFont(GlobalStyles.directDescriptionFontSize),
    fontWeight: 'bold',
    textAlign: 'justify',
    marginBottom: scaleSize(20),
  },
  taskDetails: {
    color: GlobalStyles.directTextColor,
    fontSize: scaleFont(GlobalStyles.directTaskFontSize),
    textAlign: 'justify',
    marginBottom: scaleSize(20),
  },
});