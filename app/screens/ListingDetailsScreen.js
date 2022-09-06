import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket For Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
  userContainer: {
    marginVertical: 40,
  },
});
