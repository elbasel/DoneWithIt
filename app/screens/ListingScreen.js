import { StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title:
      "red jacket for saleListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreenListingScreen",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "couch in great conditions",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

export default function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    backgroundColor: colors.light,
  },
});
