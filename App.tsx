import * as React from 'react';
import { useEffect, useRef } from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import Home from './src/screens/HomeScreen';
import SpeakOutSplit from './src/screens/SpeakOutSplitScreen';
import BoxBreathing from './src/screens/BoxBreathingScreen';
import NumbersTechnique from './src/screens/NumbersTechniqueScreen';
import SingleObject from './src/screens/SingleObjectScreen';
import SpeakOutPositive from './src/screens/SpeakOutPositiveScreen';
import SpeakOutNegative from './src/screens/SpeakOutNegativeScreen';
import Settings from './src/screens/SettingsScreen';
import Notifications from './src/screens/NotificationsScreen';
import VideoScreen from './src/screens/VideoScreen';
import { Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

enableScreens();

const Stack = createStackNavigator();

function App() {
  const navigationRef = useRef<NavigationContainerRef<any>>(null);

  useEffect(() => {
    if (Platform.OS === 'android')
    SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SpeakOutSplit" component={SpeakOutSplit} />
        <Stack.Screen name="SpeakOutPositive" component={SpeakOutPositive} />
        <Stack.Screen name="SpeakOutNegative" component={SpeakOutNegative} />
        <Stack.Screen name="BoxBreathing" component={BoxBreathing} />
        <Stack.Screen name="NumbersTechnique" component={NumbersTechnique} />
        <Stack.Screen name="SingleObject" component={SingleObject} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Notifications" component={Notifications}/>
        <Stack.Screen name="VideoScreen" component={VideoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
