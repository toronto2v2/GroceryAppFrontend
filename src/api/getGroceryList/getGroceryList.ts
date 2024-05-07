import {BASE_URL} from '@client/client';
import {IGroceryProduct} from '@store/modules/grocerySlice';
import axios from 'axios';

export const getGroceryList = async () => {
  const res = await axios.get<IGroceryProduct[]>(`${BASE_URL}/api/get-grocery`);
  return res.data;
};
