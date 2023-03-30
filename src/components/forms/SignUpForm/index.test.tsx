import { SignUpForm } from "./index";
import { render, screen } from "@testing-library/react-native";

describe("SignUpForm", () => {
  it("component matches snapshot", () => {
    render(<SignUpForm onSubmit={() => null} disabled={false} />);
    expect(screen).toMatchSnapshot();
  });
});
