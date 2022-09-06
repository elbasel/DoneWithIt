import MessagesScreen from "./app/screens/MessagesScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";

export default function App() {
  return (
    <Screen>
      <Icon name="email" size={100} />
    </Screen>
  );
}
