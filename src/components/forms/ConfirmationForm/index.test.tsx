import { ConfirmationForm } from "./index";
import { render, screen } from "@testing-library/react-native";

describe("ConfirmationForm", () => {
  it("component matches snapshot", () => {
    render(<ConfirmationForm onSubmit={() => null} disabled={false} />);
    expect(screen).toMatchSnapshot();
  });
});
