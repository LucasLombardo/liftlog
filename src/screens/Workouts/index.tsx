import { StyleSheet, Text, View, Button } from "react-native";
import { useTranslation } from "react-i18next";

export default function Workouts() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button
          title="<"
          onPress={() => null}
          accessibilityLabel={"workouts.previous_day"}
        />
        <Text>{t("workouts.today")}</Text>
        <Button
          title=">"
          accessibilityLabel="workouts.next_day"
          onPress={() => null}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#ccc",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});
