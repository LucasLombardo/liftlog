import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";

export default function WorkoutsHeader({
  onPrev,
  onNext,
  title,
}: WorkoutsHeaderProps) {
  const { t } = useTranslation();
  return (
    <View style={s.header}>
      <TouchableOpacity
        style={s.button}
        onPress={onPrev}
        accessibilityLabel={t("workouts.previous_day")}
      >
        <Text>{"<"}</Text>
      </TouchableOpacity>
      <Text style={s.title}>{title}</Text>
      <TouchableOpacity
        style={s.button}
        accessibilityLabel={t("workouts.next_day")}
        onPress={onNext}
      >
        <Text>{">"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
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
  title: {
    minWidth: 120,
    textAlign: "center",
  },
});

interface WorkoutsHeaderProps {
  onPrev: () => void;
  onNext: () => void;
  title: string;
}
