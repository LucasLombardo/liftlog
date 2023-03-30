import { TextInput } from "./index";
import { render, screen } from "@testing-library/react-native";

describe("TextInput", () => {
  it("component matches snapshot", () => {
    const handlerFn = () => () => null;
    const props = {
      values: { testInput: "" },
      label: "test input",
      id: "testInput",
      handleBlur: handlerFn,
      handleChange: handlerFn,
    };
    render(<TextInput {...props} />);
    expect(screen).toMatchSnapshot();
  });
});
