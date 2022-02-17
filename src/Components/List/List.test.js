import { render, screen } from "@testing-library/react";
import List from "./List.jsx";
import { fetchAllCards } from "../../utils/helpers";

jest.mock("../../utils/helpers");

test("should render a list of products", async () => {
  const cards = [
    {
      MoonpigProductNo: "bkg131",
      Title:
        "Typographical I Met I Liked I Loved I Am Keeping You Valentines Day Card",
    },
  ];
  fetchAllCards.mockResolvedValueOnce(cards);
  render(<List />);
  expect(fetchAllCards).toHaveBeenCalledTimes(1);
  expect(
    screen.getByText(
      "Typographical I Met I Liked I Loved I Am Keeping You Valentines Day Card"
    )
  ).toBeInTheDocument();
});
