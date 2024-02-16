import { Platform, Linking, Alert } from 'react-native';

function promptForExactAlarmPermission() {
  if (Platform.OS === 'android' && Platform.Version >= 31) {
    Alert.alert(
      "Permission Required",
      "This app requires permission to use exact alarms for notifications. Please enable this permission in the app's settings under 'Special App Access'.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Open Settings", onPress: () => Linking.openSettings() }
      ]
    );
  }
}

export default promptForExactAlarmPermission;
