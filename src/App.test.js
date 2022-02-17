import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a list of cards", async () => {
  render(<App />);

  await screen.findByRole("list");
  expect(screen.getByRole("list")).toBeInTheDocument();
});
