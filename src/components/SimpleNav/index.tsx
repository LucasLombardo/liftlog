import { StyleSheet, View, Button } from "react-native";
import { Auth } from "aws-amplify";

export const SimpleNav = ({ navigation }: SimpleNavProps) => {
  const nav = (route: string) => () => navigation.navigate(route);

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      navigation.navigate("SignIn");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  return (
    <View style={s.container}>
      <View style={s.buttonWrapper}>
        <Button title="Workouts" onPress={nav("Workouts")} />
      </View>
      <View style={s.buttonWrapper}>
        <Button title="Sign In" onPress={nav("SignIn")} />
      </View>
      <View style={s.buttonWrapper}>
        <Button title="Sign Out" onPress={handleSignOut} />
      </View>
      <View style={s.buttonWrapper}>
        <Button title="Sign Up" onPress={nav("SignUp")} />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: "auto",
    marginHorizontal: "auto",
    justifyContent: "center",
  },
  buttonWrapper: {
    marginHorizontal: 4,
  },
});

interface SimpleNavProps {
  navigation: any;
}
