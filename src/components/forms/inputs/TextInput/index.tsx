import { StyleSheet, TextInput as Input, View, Text } from "react-native";

export const TextInput = ({
  values,
  label,
  id,
  handleChange,
  handleBlur,
  ...props
}: TextInputProps) => (
  <View>
    <Text style={s.label}>{label}</Text>
    <Input
      accessibilityLabel={label}
      style={s.input}
      onChangeText={handleChange(id)}
      onBlur={handleBlur(id)}
      value={values[id]}
      {...props}
    />
  </View>
);

const s = StyleSheet.create({
  label: {
    fontSize: 16,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    padding: 4,
  },
});

interface TextInputProps {
  values: any;
  handleChange: (id: string) => () => void;
  handleBlur: (id: string) => () => void;
  label: string;
  id: string;
  [key: string]: any;
}
