import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import VideoPlayer from 'react-native-video-controls';
import GlobalStyles from '../constants/GlobalStyles';

const { width, height } = Dimensions.get('window');

const scaleFont = (size) => size * (width / 375);

const scaleSize = (size) => size * (width / 375);
const scaleHeight = (size) => size * (height / 667);

const VideoScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={GlobalStyles.backgroundColor} />

      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={GlobalStyles.externalIconSize} color={GlobalStyles.primaryColor} />
        </TouchableOpacity>
        <Text style={styles.headerText}>How It Works</Text>
      </View>

      

      <View style={styles.videoContainer}>
      <View style={styles.separatorLine} />
        <VideoPlayer
          source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4' }}
          resizeMode="cover"
          style={styles.video}
          onBack={() => navigation.goBack()}
          onError={(e) => console.log(e)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: GlobalStyles.backgroundColor,
  },
  headerContainer: {
    flexDirection: 'row',
    padding: GlobalStyles.padding,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerText: {
    fontSize: scaleFont(GlobalStyles.headerTextFontSize),
    color: GlobalStyles.primaryColor,
    fontWeight: 'bold',
  },
  separatorLine: {
    borderBottomColor: GlobalStyles.primaryColor,
    borderBottomWidth: 1,
    justifyContent: 'flex-start'
  },
  videoContainer: {
    flex: 1,
  },
  video: {
    alignItems: 'center',
    width: '100%'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VideoScreen;
