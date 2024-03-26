import React from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalStyles from '../constants/GlobalStyles';

const { width } = Dimensions.get('window');

const scaleFont = (size) => size * (width / 375);

const scaleSize = (size) => size * (width / 375);

const InfoModal = ({ text, modalVisible, setModalVisible }) => {
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
              <Text style={styles.InfoModalText}>{text}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.rectangularButton}>
                  <Text style={styles.hideButtonText}>Hide</Text>
                </View>
              </TouchableOpacity>
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
      padding: GlobalStyles.padding
    },
    modalView: {
      backgroundColor: GlobalStyles.primaryColor,
      borderRadius: scaleSize(GlobalStyles.borderRadiusLarge),
      padding: scaleSize(GlobalStyles.padding),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: scaleSize(2)
      },
      shadowOpacity: 0.25,
      elevation: 5
    },
    hideButtonText: {
      color: 'white',
      fontSize: scaleFont(GlobalStyles.internalTextFontSize),
      fontWeight: 'bold'
    },
    rectangularButton: {
      backgroundColor: GlobalStyles.backgroundColor,
      paddingVertical: scaleSize(15),
      paddingHorizontal: scaleSize(GlobalStyles.paddingHorizontal),
      alignItems: 'center',
      borderRadius: GlobalStyles.borderRadiusSmall,
    },
    InfoModalText: {
        color: GlobalStyles.directTextColor,
        fontSize: scaleFont(GlobalStyles.directDescriptionFontSize),
        textAlign: 'justify',
    }
  });  

export default InfoModal;
