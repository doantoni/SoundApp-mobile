import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Views/Home/Home";
import Filip from "./Views/Filip/Filip";
import Patricija from "./Views/Patricija/Patricija";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Kuča" }}
        />
        <Stack.Screen name="Filip" component={Filip} />
        <Stack.Screen name="Patricija" component={Patricija} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
