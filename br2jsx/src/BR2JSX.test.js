import { render, screen } from "@testing-library/react";
import BR2JSX from "./BR2JSX";

test("renders learn react link", () => {
  render(<BR2JSX />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
