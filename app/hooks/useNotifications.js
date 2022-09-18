import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { useEffect } from "react";

import pushNotificationsApi from "../api/pushNotifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const useNotifications = (notificationsListener) => {
  const registerForPushNotifications = async () => {
    try {
      const { granted } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      pushNotificationsApi.register(token.data);
    } catch (error) {
      console.log("Error getting notifications token", error);
    }
  };

  useEffect(() => {
    registerForPushNotifications();
    if (notificationsListener)
      Notifications.addNotificationReceivedListener(notificationsListener);
  }, []);
};

export default useNotifications;
