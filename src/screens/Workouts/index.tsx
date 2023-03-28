import { StyleSheet, View } from "react-native";
import WorkoutsHeader from "../../components/WorkoutsHeader";

export default function Workouts() {
  return (
    <View style={styles.container}>
      <WorkoutsHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
