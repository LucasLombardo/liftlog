import WorkoutsHeader from "./index";
import { render, screen, fireEvent } from "@testing-library/react-native";

describe("WorkoutsHeader", () => {
  it("component matches snapshot", () => {
    render(
      <WorkoutsHeader title="test" onPrev={() => null} onNext={() => null} />
    );
    expect(screen).toMatchSnapshot();
  });

  it("buttons trigger callbacks", () => {
    const props = {
      title: "test",
      onPrev: jest.fn(),
      onNext: jest.fn(),
    };
    render(<WorkoutsHeader {...props} />);

    const prevButton = screen.getByText("<");
    const nextButton = screen.getByText(">");

    fireEvent.press(prevButton);
    expect(props.onPrev).toHaveBeenCalledTimes(1);
    expect(props.onNext).not.toHaveBeenCalled();

    fireEvent.press(nextButton);
    expect(props.onPrev).toHaveBeenCalledTimes(1);
    expect(props.onNext).toHaveBeenCalledTimes(1);
  });
});
