import { StatusBar } from "expo-status-bar";
import Workouts from "./src/screens/Workouts";
import "./src/translations";

export default function App() {
  return (
    <>
      <Workouts />
      <StatusBar style="auto" />
    </>
  );
}
