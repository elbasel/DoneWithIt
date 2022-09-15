import { createStackNavigator } from "@react-navigation/stack";
import ListingDetailsScreen from "../app/screens/ListingDetailsScreen";
import ListingScreen from "../app/screens/ListingScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: "modal",
      }}
    >
      <Stack.Screen name="Listings" component={ListingScreen} />
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
