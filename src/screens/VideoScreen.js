import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import GlobalStyles from '../constants/GlobalStyles';

const { width } = Dimensions.get('window');

const scaleFont = (size) => size * (width / 375);

const VideoScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>

      {/* header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={GlobalStyles.externalIconSize} color={GlobalStyles.primaryColor} />
        </TouchableOpacity>
        <Text style={styles.headerText}>How It Works</Text>
      </View>

      {/* separator */}
      <View style={styles.separatorLine} />

      {/* video container */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://customer-l9k8ksax2dn0u08o.cloudflarestream.com/7afdbd9b43dfa92721b596a1fd523cfb/iframe?poster=https%3A%2F%2Fcustomer-l9k8ksax2dn0u08o.cloudflarestream.com%2F7afdbd9b43dfa92721b596a1fd523cfb%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600' }}
          style={styles.video}
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
    borderColor: GlobalStyles.primaryColor,
    borderBottomWidth: 1,
    paddingHorizontal: GlobalStyles.padding,
    marginHorizontal: GlobalStyles.padding
  },
  videoContainer: {
    flex: 1,
    borderRadius: GlobalStyles.borderRadiusLarge,
    padding: GlobalStyles.padding,
    paddingVertical: GlobalStyles.paddingVertical 
  },
  video: {
    alignItems: 'center',
    borderRadius: GlobalStyles.borderRadiusLarge,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VideoScreen;
