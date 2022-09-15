import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingEditScreen from "../app/screens/ListingEditScreen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Feed" component={FeedNavigator} />
      <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
      <Tab.Screen name="AccountNavigator" component={AccountNavigator} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
