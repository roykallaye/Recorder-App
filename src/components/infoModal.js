import React from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalStyles from '../constants/GlobalStyles';

const { width, height } = Dimensions.get('window');

const scaleFont = (size) => size * (width / 375);

const scaleSize = (size) => size * (width / 375);

const InfoModal = ({ text, modalVisible, setModalVisible }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ionicons name="information-circle-outline" size={40} color="white" />
        </TouchableOpacity>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{ color: 'black' }}>{text}</Text>
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
    },
    modalView: {
      margin: scaleSize(20),
      backgroundColor: 'white',
      borderRadius: scaleSize(20),
      padding: scaleSize(35),
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: scaleSize(2)
      },
      shadowOpacity: 0.25,
      shadowRadius: scaleSize(4),
      elevation: 5
    },
    button: {
      marginTop: scaleSize(15),
    },
    hideButtonText: {
      color: 'white',
      fontSize: scaleFont(20),
      fontWeight: 'bold'
    },
    rectangularButton: {
      backgroundColor: GlobalStyles.backgroundColor,
      paddingVertical: scaleSize(10),
      paddingHorizontal: scaleSize(20),
      alignItems: 'center',
      borderRadius: scaleSize(10),
    }
  });  

export default InfoModal;
