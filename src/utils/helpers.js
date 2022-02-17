const CORS_API_HOST = "https://cors-anywhere.herokuapp.com/";

export const fetchAllCards = async () => {
  const url = `${CORS_API_HOST}https://search.moonpig.com/api/products?size=20&fq=card_shop_id:1`;
  try {
    const response = await fetch(url).then((data) => data.json());
    return response.Products;
  } catch (error) {
    console.log("error", error);
  }
};
