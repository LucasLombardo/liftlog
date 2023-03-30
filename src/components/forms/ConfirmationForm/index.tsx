import { StyleSheet, Button, View, Text } from "react-native";
import { TextInput } from "../inputs/TextInput";
import { Formik } from "formik";

export const ConfirmationForm = ({
  onSubmit,
  disabled,
  initialEmail = "",
}: ConfirmationFormProps) => (
  <Formik
    initialValues={{ email: initialEmail, confirmation: "" }}
    onSubmit={onSubmit}
  >
    {({ handleChange, handleBlur, handleSubmit, values }: any) => {
      const props = { values, handleChange, handleBlur, editable: !disabled };
      return (
        <View style={[s.form, disabled ? s.formDisabled : null]}>
          <Text style={s.title}>Enter Email Confirmation Code</Text>
          <TextInput id="email" label="Email" {...props} />
          <TextInput id="confirmation" label="Confirmation" {...props} />
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

interface ConfirmationFormProps {
  onSubmit: (data: ConfirmationFormData, other: any) => void;
  disabled: boolean;
  initialEmail?: string;
}

export interface ConfirmationFormData {
  email: string;
  confirmation: string;
}
