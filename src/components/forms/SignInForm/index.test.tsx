import { SignInForm } from "./index";
import { render, screen } from "@testing-library/react-native";

describe("SignInForm", () => {
  it("component matches snapshot", () => {
    render(<SignInForm onSubmit={() => null} disabled={false} />);
    expect(screen).toMatchSnapshot();
  });
});
