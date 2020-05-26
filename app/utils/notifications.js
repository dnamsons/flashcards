import { Notifications } from 'expo'
import AsyncStorage from '@react-native-community/async-storage'

const KEY = '@FlashcardNotifications'
const NOTIFICATION = {
  title: "Hey, don't lose your progress!",
  body: 'Remember to take a quiz today',
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  },
  ios: {
    sound: true,
  },
}

export const clearNotification = () => {
  return AsyncStorage.getItem(KEY)
    .then((res) => JSON.parse(res))
    .then((notificationDate) => {
      const currentDate = new Date()
      if (Math.abs(notificationDate - currentDate) < 24) {
        Notifications.cancelAllScheduledNotificationsAsync()
        AsyncStorage.removeItem(KEY)
      }
    })
}

export const scheduleNotification = () => {
  AsyncStorage.getItem(KEY)
    .then((res) => JSON.parse(res))
    .then((data) => {
      if (typeof data === 'undefined' || data === null) {
        let tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        tomorrow.setHours(8)
        tomorrow.setMinutes(30)

        Notifications.scheduleLocalNotificationAsync(NOTIFICATION, {
          time: tomorrow,
          repeat: 'day',
        })
        AsyncStorage.setItem(KEY, JSON.stringify(tomorrow))
      }
    })
}
