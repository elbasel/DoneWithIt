import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";

import AppText from "../components/AppText";
import { ListItem } from "../components/lists";
import ContactSellerForm from "../components/ContactSellerForm";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        style={styles.image}
        uri={listing.images[0].url}
        preview={listing.images[0].thumbnailUrl}
        tint="light"
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} numberOfLines={1}>
          {listing.title}
        </AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/elbasel.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
      <View style={styles.formContainer}>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
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
  formContainer: {
    paddingHorizontal: 10,
  },
});
