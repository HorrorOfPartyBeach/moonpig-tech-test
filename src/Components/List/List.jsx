import { useState, useEffect } from "react";
import { fetchAllCards } from "../../utils/helpers";

const List = () => {
  const [cardList, setCardList] = useState();

  const getAllCards = async () => {
    const cards = await fetchAllCards();
    if (cards) {
      setCardList(cards);
    }
  };

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <div className="flex">
      <ul
        aria-label="Card List"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4"
      >
        {cardList?.map((card) => {
          return (
            <li className="m-auto">
              <img
                className="items-center"
                key={card.MoonpigProductNo}
                src={card.ProductImage.Link.Href}
                alt={card.Title}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
