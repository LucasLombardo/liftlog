import { StyleSheet, View } from "react-native";
import { SignInForm, SignInFormData } from "../../components/forms/SignInForm";
import { Auth } from "aws-amplify";
import { SimpleNav } from "../../components/SimpleNav";
import { useState } from "react";

export default function SignUp({ navigation }: any) {
  const [signInLoading, setSignInLoading] = useState(false);

  const handleSignIn = async (data: SignInFormData, { resetForm }: any) => {
    if (signInLoading) return;
    const { email: username, password } = data;
    try {
      setSignInLoading(true);
      const { user } = await Auth.signIn({
        username,
        password,
      });
      console.log(user);
      resetForm();
      setSignInLoading(false);
      navigation.navigate("Workouts");
    } catch (error) {
      console.log("error signing in:", error);
      setSignInLoading(false);
    }
  };

  return (
    <View style={s.container}>
      <SignInForm onSubmit={handleSignIn} disabled={signInLoading} />
      <SimpleNav {...{ navigation }} />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
