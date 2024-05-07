import {BASE_URL} from '@client/client';
import {IGroceryProduct} from '@store/modules/grocerySlice';
import axios from 'axios';

export const updateGrocery = async (data: IGroceryProduct) => {
  const res = await axios.post<IGroceryProduct>(
    `${BASE_URL}/api/update-grocery`,
    data,
  );
  return res.data;
};
