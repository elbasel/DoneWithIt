import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

import AppText from "../components/AppText";
import { ListItem } from "../components/lists";

export default function ListingDetailsScreen({ route }) {
  const item = route.params;

  return (
    <View>
      <Image style={styles.image} source={item.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} numberOfLines={1}>
          {item.title}
        </AppText>
        <AppText style={styles.price}>${item.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/elbasel.jpg")}
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
    textTransform: "capitalize",
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
