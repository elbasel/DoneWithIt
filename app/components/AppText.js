import { Platform, StyleSheet, Text, View } from "react-native";
import { useFonts, Alata_400Regular } from "@expo-google-fonts/alata";
// import { useFonts, Amarante_400Regular } from "@expo-google-fonts/amarante";

let fontName = "Alata_400Regular";

export default function AppText({ children, style }) {
  let [fontsLoaded] = useFonts({
    Alata_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text style={[style, { fontSize: 18 }]}>{children}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
}

const platformSpecificStyles = Platform.select({
  android: {
    fontFamily: "Roboto",
    fontFamily: `${fontName}`,
  },
  ios: {
    fontFamily: "Avenir",
  },
});

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    ...platformSpecificStyles,
  },
});
