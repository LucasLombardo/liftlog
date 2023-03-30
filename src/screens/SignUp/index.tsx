import { StyleSheet, View, Platform } from "react-native";
import { SignUpForm, SignUpFormData } from "../../components/forms/SignUpForm";
import { Auth } from "aws-amplify";
import { SimpleNav } from "../../components/SimpleNav";
import { useState } from "react";
import {
  ConfirmationForm,
  ConfirmationFormData,
} from "../../components/forms/ConfirmationForm";

export default function SignUp({ navigation }: any) {
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [confirmationLoading, setConfirmationLoading] = useState(false);
  const [confirmationEmail, setConfirmationEmail] = useState("");

  const handleSignUp = async (data: SignUpFormData, { resetForm }: any) => {
    if (signUpLoading) return;
    const {
      email: username,
      password,
      firstName: name,
      lastName: family_name,
    } = data;
    try {
      setSignUpLoading(true);
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: { name, family_name },
      });
      console.log(user);
      resetForm();
      setSignUpLoading(false);
      setConfirmationEmail(username);
    } catch (error) {
      console.log("error signing up:", error);
      setSignUpLoading(false);
    }
  };

  const handleConfirmation = async (
    data: ConfirmationFormData,
    { resetForm }: any
  ) => {
    if (signUpLoading) return;
    const { email: username, confirmation } = data;
    try {
      setConfirmationLoading(true);
      const res = await Auth.confirmSignUp(username, confirmation);
      console.log(res);
      resetForm();
      setConfirmationLoading(false);
      navigation.navigate("Workouts");
    } catch (error) {
      console.log("error signing up:", error);
      setConfirmationLoading(false);
    }
  };

  return (
    <View style={s.container}>
      {confirmationEmail ? (
        <ConfirmationForm
          onSubmit={handleConfirmation}
          disabled={confirmationLoading}
        />
      ) : (
        <SignUpForm onSubmit={handleSignUp} disabled={signUpLoading} />
      )}
      <SimpleNav {...{ navigation }} />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 50 : 0,
    flex: 1,
    backgroundColor: "#fff",
  },
});

// try {
//   const user = await Auth.signIn(username, password);
// } catch (error) {
//   console.log('error signing in', error);
// }

// try {
//   await Auth.signOut();
// } catch (error) {
//   console.log('error signing out: ', error);
// }
