import { StatusBar } from "expo-status-bar";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import Workouts from "./src/screens/Workouts";
import SignUp from "./src/screens/SignUp";
import SignIn from "./src/screens/SignIn";
import "./src/translations";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

Amplify.configure(awsconfig);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Workouts"
            component={Workouts}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignUp"
            component={SignUp}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignIn"
            component={SignIn}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
