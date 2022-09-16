import LottieView from "lottie-react-native";

const ActivityIndicator = ({ visible }) => {
  if (!visible) return null;
  return (
    <LottieView
      source={require("../assets/animations/loader.json")}
      autoPlay
      loop
    />
  );
};

export default ActivityIndicator;
