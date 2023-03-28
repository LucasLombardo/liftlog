import { StatusBar } from "expo-status-bar";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import Workouts from "./src/screens/Workouts";
import "./src/translations";

Amplify.configure(awsconfig);

export default function App() {
  return (
    <>
      <Workouts />
      <StatusBar style="auto" />
    </>
  );
}
