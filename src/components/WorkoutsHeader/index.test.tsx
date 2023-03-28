import WorkoutsHeader from "./index";
import { render } from "@testing-library/react-native";

describe("WorkoutsHeader", () => {
  it("component matches snapshot", () => {
    const tree = render(<WorkoutsHeader />);
    expect(tree).toMatchSnapshot();
  });
});
