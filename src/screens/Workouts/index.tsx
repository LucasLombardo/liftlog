import { StyleSheet, View } from "react-native";
import { useState } from "react";
import WorkoutsHeader from "../../components/WorkoutsHeader";
import { useTranslation } from "react-i18next";
import { formatDate } from "../../helpers";

export default function Workouts() {
  const today = new Date();
  const [date, setDate] = useState(today);
  const { t, i18n } = useTranslation();

  const changeDateBy = (n: number) => () => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + n);
    setDate(newDate);
  };

  const formattedDate = formatDate(date, { lang: i18n.language, type: "long" });
  const isToday = today.toDateString() === date.toDateString();
  const displayTitle = isToday ? t("workouts.today") : formattedDate;

  return (
    <View style={s.container}>
      <WorkoutsHeader
        title={displayTitle}
        onPrev={changeDateBy(-1)}
        onNext={changeDateBy(1)}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
