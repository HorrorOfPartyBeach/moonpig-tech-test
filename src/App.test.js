import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a header with an appropriate text title", () => {
  render(<App />);

  const header = screen.getByText("Moonpig Card List");
  expect(header).toBeInTheDocument();
});
