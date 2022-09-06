import { Image, StyleSheet, Text, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={45} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={45}
        />
      </View>
      <Image
        style={styles.image}
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 60,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 60,
    right: 30,
  },
  image: {
    // 100% of the screen? answer => yes.
    // Image overflows without it? answer => image expands to its dimentions
    maxWidth: "100%",
    maxHeight: "100%",
  },
  container: {
    // Why does the container expand to take the whole screen ever if flex: 1 is not set on it?
    // This ensures the container takes the whole screen regardless of the size of it's children
    flex: 1,
    // The image is 100% of the container, uncommenting the below will demo that.
    // width: 100,
    // height: 100,

    // This happens because the image is too big! and it tries to expand, but setting its width
    // and height to 100% is like setting its max-width and height to 100%
    // Element are as wide as their content!
    // so if the image was smaller, the container won't expand to take the whole screen!
    backgroundColor: colors.black,
  },
});
