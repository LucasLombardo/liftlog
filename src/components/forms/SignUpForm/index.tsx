import { StyleSheet, Button, View, Text } from "react-native";
import { TextInput } from "../inputs/TextInput";
import { Formik } from "formik";

export const SignUpForm = ({ onSubmit, disabled }: SignUpFormProps) => (
  <Formik
    initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
    onSubmit={onSubmit}
  >
    {({ handleChange, handleBlur, handleSubmit, values }: any) => {
      const props = { values, handleChange, handleBlur, editable: !disabled };
      return (
        <View style={[s.form, disabled ? s.formDisabled : null]}>
          <Text style={s.title}>Sign up</Text>
          <TextInput id="firstName" label="First Name" {...props} />
          <TextInput id="lastName" label="Last Name" {...props} />
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
);

const s = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  form: {
    marginTop: 16,
    marginHorizontal: "auto",
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

interface SignUpFormProps {
  onSubmit: (data: SignUpFormData, other: any) => void;
  disabled: boolean;
}

export interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
