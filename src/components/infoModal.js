import React from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalStyles from '../constants/GlobalStyles';

const { width } = Dimensions.get('window');

const scaleFont = (size) => size * (width / 375);

const scaleSize = (size) => size * (width / 375);

const InfoModal = ({ text, modalVisible, setModalVisible }) => {
  const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ionicons name="information-circle-outline" size={GlobalStyles.externalIconSize} color="white" />
        </TouchableOpacity>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.p1}>
                <Text style={styles.InfoModalText}>{text}</Text>
              </View>
              <View style={styles.p2}>
                <View style={styles.button1}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('VideoScreen')} >
                    <View style={styles.rectangularButton}>
                      <Text style={styles.hideButtonText}>Watch Now</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.button2}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}>
                    <View style={styles.rectangularButton}>
                      <Text style={styles.hideButtonText}>Maybe Later</Text>
                    </View>
                  </TouchableOpacity>
                </View>
            </View>
          </View>
          </View>
        </Modal>
      </View>
    );
  };

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: scaleSize(GlobalStyles.padding)
    },
    modalView: {
      backgroundColor: GlobalStyles.primaryColor,
      borderRadius: scaleSize(GlobalStyles.borderRadiusLarge),
      padding: scaleSize(GlobalStyles.padding),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: scaleSize(2),
      },
      shadowOpacity: 0.25,
      elevation: 5
    },
    p1: {
      backgroundColor: GlobalStyles.primaryColor,
      paddingBottom: scaleSize(GlobalStyles.padding)
    },
    hideButtonText: {
      color: GlobalStyles.primaryColor,
      fontSize: scaleFont(GlobalStyles.internalTextFontSize),
      fontWeight: 'bold',
      paddingHorizontal: scaleSize(GlobalStyles.padding)
    },
    p2: {
      backgroundColor: GlobalStyles.primaryColor,
      flexDirection: 'column',
    },
    button1: {
      paddingBottom: scaleSize(GlobalStyles.padding/6)
    },
    button2: {
      paddingTop: scaleSize(GlobalStyles.padding/6)
    },
    rectangularButton: {
      backgroundColor: GlobalStyles.backgroundColor,
      paddingVertical: scaleSize(15),
      paddingHorizontal: scaleSize(GlobalStyles.paddingHorizontal),
      alignItems: 'center',
      borderRadius: GlobalStyles.borderRadiusLarge,
    },
    InfoModalText: {
        color: GlobalStyles.directTextColor,
        fontSize: scaleFont(GlobalStyles.directDescriptionFontSize),
        textAlign: 'justify',
    }
  });  

export default InfoModal;
