import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
import GlobalStyles from '../../GlobalStyles';

const { width, height } = Dimensions.get('window');

const scaleFont = (size) => size * (width / 375);

const scaleSize = (size) => size * (width / 375);
const scaleHeight = (size) => size * (height / 667);

const VideoScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigation = useNavigation();
  const videoRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    console.log('pressed play');
  };

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

      <TouchableOpacity activeOpacity={GlobalStyles.activeOpacity} onPress={togglePlay} style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={{ uri: 'https://customer-l9k8ksax2dn0u08o.cloudflarestream.com/7afdbd9b43dfa92721b596a1fd523cfb/iframe?poste[…]ails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600' }}
          style={styles.video}
          paused={!isPlaying}
          resizeMode="cover"
        />
        {!isPlaying && (
          <View style={styles.overlay}>
            <Icon name="play-circle" size={100} color={GlobalStyles.backgroundColor} />
          </View>
        )}
      </TouchableOpacity>
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
