import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import colors from "../config/colors";
import AppText from "./AppText";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = () => {
  const netInfo = useNetInfo();
  if (netInfo.isInternetReachable !== false) return null;

  return (
    <View style={styles.container}>
      <AppText style={styles.text}>No internet connection</AppText>
    </View>
  );
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "100%",
    backgroundColor: colors.danger,
    top: Constants.statusBarHeight,
    zIndex: 1,
    elevation: Platform.OS === "android" ? 1 : 0,
  },
  text: {
    color: colors.white,
  },
});
