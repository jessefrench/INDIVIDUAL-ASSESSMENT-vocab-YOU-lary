import { getSingleCard } from './cardData';
import { getSingleCategory } from './categoryData';

// get data for viewCard
const getCardDetails = async (firebaseKey) => {
  const cardObject = await getSingleCard(firebaseKey);
  const categoryObject = await getSingleCategory(cardObject.category_id);
  return { ...cardObject, categoryObject };
};

export default getCardDetails;
