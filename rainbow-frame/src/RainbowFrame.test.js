import { render, screen } from "@testing-library/react";
import RainbowFrame from "./RainbowFrame";

test("renders learn react link", () => {
  render(<RainbowFrame />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
