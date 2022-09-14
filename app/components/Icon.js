import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Icon({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
  borderRadius = size / 2,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size / 2} />
    </View>
  );
}
