import { useState, useEffect } from "react";
import { fetchAllCards } from "../../utils/helpers";

const List = () => {
  const [cardList, setCardList] = useState();

  const getAllCards = async () => {
    const cards = await fetchAllCards();
    console.log(cards, "CARDS");
    if (cards) {
      setCardList(cards);
    }
  };

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <ul aria-label="Card List">
      {cardList?.map((card) => {
        return <li key={card.MoonpigProductNo}>{card.Title}</li>;
      })}
    </ul>
  );
};

export default List;
