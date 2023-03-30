import { StyleSheet, View, Button, Text } from "react-native";
import { useEffect, useState } from "react";
import WorkoutsHeader from "../../components/WorkoutsHeader";
import { useTranslation } from "react-i18next";
import { formatDate } from "../../helpers";
import { DataStore } from "@aws-amplify/datastore";
import { Workout } from "../../models";
import { SimpleNav } from "../../components/SimpleNav";
import { Auth } from "aws-amplify";
import { useIsFocused } from "@react-navigation/native";

export default function Workouts({ navigation }: any) {
  const isFocused = useIsFocused();
  const today = new Date();
  const [date, setDate] = useState(today);
  const { t, i18n } = useTranslation();
  const [session, setSession] = useState(null);

  const changeDateBy = (n: number) => () => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + n);
    setDate(newDate);
  };

  const formattedDate = formatDate(date, { lang: i18n.language, type: "long" });
  const isToday = today.toDateString() === date.toDateString();
  const displayTitle = isToday ? t("workouts.today") : formattedDate;

  const handleCreate = async () => {
    await DataStore.save(
      new Workout({
        date: "1970-01-01Z",
        Excercises: [],
      })
    );
  };

  const getUserSession = async () => {
    try {
      const res = await Auth.currentUserInfo();
      console.log(res);
      setSession(res);
    } catch (e) {
      // isFocused
    }
  };

  useEffect(() => {
    if (!isFocused) return;
    getUserSession();
  }, [isFocused]);

  return (
    <View style={s.container}>
      <WorkoutsHeader
        title={displayTitle}
        onPrev={changeDateBy(-1)}
        onNext={changeDateBy(1)}
      />
      <View style={s.content}>
        {session ? (
          <Button title="New Workout" onPress={handleCreate} />
        ) : (
          <Text>Sign In To Add Workouts</Text>
        )}
      </View>
      <SimpleNav {...{ navigation }} />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom: 40,
  },
});
