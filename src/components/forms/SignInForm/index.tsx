import { StyleSheet, Button, View, Text } from "react-native";
import { TextInput } from "../inputs/TextInput";
import { Formik } from "formik";

export const SignInForm = ({ onSubmit, disabled }: SignInFormProps) => (
  <View style={s.container}>
    <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values }: any) => {
        const props = { values, handleChange, handleBlur, editable: !disabled };
        return (
          <View style={[s.form, disabled ? s.formDisabled : null]}>
            <Text style={s.title}>Sign in</Text>
            <TextInput id="email" label="Email" {...props} />
            <TextInput
              id="password"
              label="Password"
              secureTextEntry
              {...props}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        );
      }}
    </Formik>
  </View>
);

const s = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  form: {
    marginTop: 16,
    width: "70%",
    maxWidth: 420,
    minWidth: 240,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  formDisabled: {
    opacity: 0.5,
  },
});

interface SignInFormProps {
  onSubmit: (data: SignInFormData, other: any) => void;
  disabled: boolean;
}

export interface SignInFormData {
  email: string;
  password: string;
}
