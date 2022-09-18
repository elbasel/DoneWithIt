import LottieView from "lottie-react-native";
import { Platform, StyleSheet } from "react-native";

const ActivityIndicator = ({ visible }) => {
  if (!visible) return null;
  return (
    <LottieView
      style={styles.overlay}
      source={require("../assets/animations/loader.json")}
      autoPlay
      loop
    />
  );
};

const styles = StyleSheet.create({
  overlay: {
    zIndex: 1,
    elevation: Platform.OS === "android" ? 1 : 0,
    backgroundColor: "black",
    opacity: 0.6,
  },
});

export default ActivityIndicator;
