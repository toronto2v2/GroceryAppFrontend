import {BackHeader} from '@components/BackHeader/BackHeader';
import {CartProduct} from '@components/CartProduct/CartProduct';
import {EditNameModal} from '@components/EditNameModal/EditNameModal';
import {IProduct} from '@components/ProductCard/ProductCard';
import {SafeArea} from '@components/SafeArea/SafeArea';
import {Center, Text} from '@gluestack-ui/themed';
import {useAppSelector} from '@hooks/storeHooks';
import {selectAddedProducts} from '@store/modules/grocerySlice';
import React, {memo, useCallback, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';

interface IGroceryList {
  onItemPress: (productName: IProduct) => void;
}

const GroceryList = memo(({onItemPress}: IGroceryList) => {
  const grocery = useAppSelector(selectAddedProducts);

  const listEmptyComponent = (
    <Center flex={1}>
      <Text textAlign="center" fontWeight="$black" fontSize={'$xl'}>
        {'To see something here, add your products in Products List :)'}
      </Text>
    </Center>
  );

  const renderItem = useCallback(
    ({item}: {item: IProduct}) => {
      return <CartProduct onEditItem={onItemPress} product={item} />;
    },
    [onItemPress],
  );

  return (
    <FlatList
      data={grocery}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ListEmptyComponent={listEmptyComponent}
      contentContainerStyle={grocery.length ? {} : styles.flex}
      showsVerticalScrollIndicator={false}
    />
  );
});

export const GroceryScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [itemForEdit, setItemForEdit] = useState<IProduct | null>(null);

  const ref = React.useRef(null);

  const onItemEditPress = useCallback((productName: IProduct) => {
    setShowModal(prev => !prev);
    setItemForEdit(productName);
  }, []);

  return (
    <SafeArea withoutTop>
      <BackHeader title="Cart" />

      <GroceryList onItemPress={onItemEditPress} />

      <EditNameModal
        showModal={showModal}
        setShowModal={setShowModal}
        finalFocusRef={ref}
        product={itemForEdit}
      />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
