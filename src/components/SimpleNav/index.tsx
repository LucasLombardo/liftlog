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
      <Button title="Workouts" onPress={nav("Workouts")} />
      <Button title="Sign In" onPress={nav("SignIn")} />
      <Button title="Sign Out" onPress={handleSignOut} />
      <Button title="Sign Up" onPress={nav("SignUp")} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: "auto",
    width: 340,
    marginHorizontal: "auto",
    justifyContent: "space-between",
  },
});

interface SimpleNavProps {
  navigation: any;
}
