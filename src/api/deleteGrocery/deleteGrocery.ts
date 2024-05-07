import {BASE_URL} from '@client/client';
import axios from 'axios';

export const deleteGrocery = async (data: {id: string}) => {
  await axios.post(`${BASE_URL}/api/delete-grocery`, data);
};
