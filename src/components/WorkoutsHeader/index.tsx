import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";

export default function WorkoutsHeader() {
  const { t } = useTranslation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => null}
        accessibilityLabel={"workouts.previous_day"}
      >
        {"<"}
      </TouchableOpacity>
      <Text>{t("workouts.today")}</Text>
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="workouts.next_day"
        onPress={() => null}
      >
        {">"}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    borderColor: "#444",
    borderStyle: "solid",
    borderBottomWidth: 1,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderColor: "#444",
    borderStyle: "solid",
    borderWidth: 1,
    marginVertical: 2,
  },
});
