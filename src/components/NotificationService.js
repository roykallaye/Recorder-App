import PushNotification from 'react-native-push-notification';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { Platform } from 'react-native';
import NavigationService from './NavigationService';

class NotificationServices {
  constructor() {
    // Create a default notification channel (required for Android 8.0 (Oreo) and above)
    PushNotification.createChannel({
      channelId: "stress-management-reminders",
      channelName: "Stress Management Reminders",
      channelDescription: "A default channel for all notifications",
      playSound: true,
      soundName: "default",
      importance: 4,
      vibrate: true,
    }, (created) => console.log(`CreateChannel returned '${created}'`));

    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
        console.log("TOKEN:", token);
      },

      onNotification: function(notification) {
          console.log("NOTIFICATION:", notification);

          if (notification.userInteraction) {
              NavigationService.navigate('Home');
          }

          // Call this on iOS only
          //notification.finish(PushNotification.FetchResult.NoData);
      },

      popInitialNotification: true,

      // (optional) default: true
      // - Specifies if permissions (iOS) and token (Android and iOS) will be requested or not
      requestPermissions: true,
    });
  }

  async checkAndRequestPermissions() {
    let hasPermission = false;
    // Platform-specific permission check
    if (Platform.OS === 'ios') {
        const permissionStatus = await check(PERMISSIONS.IOS.NOTIFICATIONS);
        hasPermission = permissionStatus === RESULTS.GRANTED;
    } else if (Platform.OS === 'android') {
        // Simplified for Android as permissions are generally granted at install time
        hasPermission = true;
    }

    if (!hasPermission) {
        if (Platform.OS === 'ios') {
            const requestStatus = await request(PERMISSIONS.IOS.NOTIFICATIONS);
            hasPermission = requestStatus === RESULTS.GRANTED;
        }
        // Add Android permission request logic if needed
    }
    return hasPermission;
  }

  scheduleNotification(hour, minute) {
    console.log('ScheduleNotification executed');
    const now = new Date();
    const nextNotification = new Date();

    nextNotification.setHours(hour, minute, 0, 0); // Sets the next notification for the specified hour and minute

    // If the time is in the past, set it for the next day
    if (nextNotification <= now) {
      nextNotification.setDate(nextNotification.getDate() + 1);
    }

    PushNotification.localNotificationSchedule({
      message: "This is your daily notification reminder.",
      date: nextNotification,
      repeatType: 'day',
      channelId: "stress-management-reminders",
      data: JSON.stringify({ link: 'yourapp://home' }),
    });
  }

  cancelAllNotifications() {
    PushNotification.cancelAllLocalNotifications();
  }

}

export const notificationService = new NotificationServices();
