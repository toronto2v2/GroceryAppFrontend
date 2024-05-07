import {IProduct} from '@components/ProductCard/ProductCard';
import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {RootState} from '@store/configureStore';

export interface IGroceryProduct extends IProduct {
  quantity: number;
}

const groceryAdapter = createEntityAdapter({
  selectId: (product: IGroceryProduct) => product.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const grocerySlice = createSlice({
  name: 'grocery',
  initialState: groceryAdapter.getInitialState(),
  reducers: {
    addProduct: groceryAdapter.upsertOne,
    updateProduct: groceryAdapter.updateOne,
    deleteProduct: groceryAdapter.removeOne,
    syncGrocery: groceryAdapter.upsertMany,
  },
});

export const {addProduct, deleteProduct, updateProduct, syncGrocery} =
  grocerySlice.actions;
export const {selectAll: selectAddedProducts} = groceryAdapter.getSelectors(
  (state: RootState) => state.grocery,
);

// const grocerySelectors = groceryAdapter.getSelectors<RootState>(
//   state => state.grocery,
// );
// const groceryList = grocerySelectors.selectAll(store.getState());
