import MessagesScreen from "./app/screens/MessagesScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppText from "./app/components/AppText";
import AppPicker from "./app/components/AppPicker";

let categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  },
];

export default function App() {
  return (
    <Screen>
      <AppTextInput placeholder="First Name" icon="email" />
      <AppPicker items={categories} placeholder="Category" icon="apps" />
    </Screen>
  );
}
