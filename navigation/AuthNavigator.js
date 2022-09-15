import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../app/screens/LoginScreen";
import RegisterScreen from "../app/screens/RegisterScreen";
import WelcomeScreen from "../app/screens/WelcomeScreen";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
