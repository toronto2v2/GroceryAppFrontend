import {getGroceryList} from '@api/getGroceryList/getGroceryList';
import {getProductsList} from '@api/getProductsList/getProductsList';
import {Filters} from '@components/Filters/Filters';
import {MainScreenHeader} from '@components/MainScreenHeader/MainScreenHeader';
import {IProduct, ProductCard} from '@components/ProductCard/ProductCard';
import {Box, Divider, View} from '@gluestack-ui/themed';
import {useAppDispatch, useAppSelector} from '@hooks/storeHooks';
import {
  IGroceryProduct,
  selectAddedProducts,
  syncGrocery,
} from '@store/modules/grocerySlice';
import {useQuery} from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

export const HomeScreen = () => {
  const activeFilter = useAppSelector(state => state.filters.filter);
  const dispatch = useAppDispatch();
  const grocery = useSelector(selectAddedProducts);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const {data: groceryData} = useQuery({
    queryKey: ['groceryList'],
    queryFn: getGroceryList,
  });

  const {data: products} = useQuery({
    queryKey: ['products'],
    queryFn: getProductsList,
  });

  // sync db with entity adapter
  useEffect(() => {
    if (groceryData && groceryData.length) {
      const updateAdapter = groceryData.reduce(
        (acc: Record<string, IGroceryProduct>, next) => {
          acc[next.id] = next;
          return acc;
        },
        {},
      );
      dispatch(syncGrocery(updateAdapter));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groceryData]);

  useEffect(() => {
    if (products) {
      const applyGroceryQuantity = (productsArr: IProduct[]) => {
        return productsArr.map(product => {
          const isInGrocery = grocery.find(g => g.id === product.id);
          if (isInGrocery) {
            return {
              ...product,
              quantity: isInGrocery.quantity,
            };
          }
          return product;
        });
      };

      if (!activeFilter) {
        setFilteredProducts(applyGroceryQuantity([...products]));
      } else {
        const filtered = products.filter(p => p.type === activeFilter);
        setFilteredProducts(applyGroceryQuantity(filtered));
      }
    }
  }, [activeFilter, products, grocery]);

  return (
    <View flex={1}>
      <MainScreenHeader boughtProductsQuantity={grocery.length} />
      <Filters />
      <Box alignItems="center">
        <Divider bg="$indigo500" $dark-bg="$indigo400" w={'$40'} />
      </Box>

      <FlatList
        data={filteredProducts}
        numColumns={2}
        columnWrapperStyle={styles.around}
        renderItem={({item}) => <ProductCard product={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  around: {
    justifyContent: 'space-around',
  },
});
