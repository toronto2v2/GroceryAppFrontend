import {BASE_URL} from '@client/client';
import {IGroceryProduct} from '@store/modules/grocerySlice';
import axios from 'axios';

export const getProductsList = async () => {
  const res = await axios.get<IGroceryProduct[]>(
    `${BASE_URL}/api/get-products`,
  );
  return res.data;
};
