import { StyleSheet, View, Modal } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";

import colors from "../config/colors";

import LottieView from "lottie-react-native";

const UploadScreen = ({ onDone, progress, visible }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            source={require("../assets/animations/done.json")}
            onAnimationFinish={onDone}
            style={styles.animation}
            resizeMode="cover"
          />
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    height: 150,
  },
});
