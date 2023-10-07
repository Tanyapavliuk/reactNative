import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Registration from "./src/Screens/RegistrationScreen";
import Login from "./src/Screens/LoginScreen";
import Home from "./src/Screens/Home";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          name="Registration"
          component={Registration}
          options={{
            title: "Registration",
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
