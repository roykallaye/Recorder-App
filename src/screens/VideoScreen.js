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
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar style={GlobalStyles.backgroundColor} />
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={GlobalStyles.externalIconSize} color={GlobalStyles.primaryColor} />
        </TouchableOpacity>
        <Text style={styles.headerText}>How It Works</Text>
      </View>

      <View style={styles.separatorLine} />

      <View style={styles.videoContainer}>
        <VideoPlayer
          source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4' }}
          style={styles.video}
          resizeMode="cover"
          onBack={() => navigation.goBack()}
          onError={(e) => console.log(e)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: GlobalStyles.backgroundColor,
  },
  headerView: {
    flexDirection: 'row',
    paddingLeft: scaleSize(10),
    paddingTop: scaleHeight(20),
    paddingBottom: scaleHeight(20),
    alignItems: 'center',
  },
  headerText: {
    fontSize: scaleFont(GlobalStyles.headerTextFontSize),
    color: GlobalStyles.primaryColor,
    fontWeight: 'bold',
  },
  separatorLine: {
    borderBottomColor: GlobalStyles.primaryColor,
    borderBottomWidth: 1,
    marginLeft: scaleSize(20),
    marginRight: scaleSize(20),
  },
  container: {
    flex: 1,
  },
  header: {
    fontSize: scaleFont(GlobalStyles.headerTextFontSize),
    margin: scaleSize(20),
    color: GlobalStyles.primaryColor,
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: scaleSize(20),
    marginVertical: scaleHeight(40),
  },
  video: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VideoScreen;
