import {deleteGrocery} from '@api/deleteGrocery/deleteGrocery';
import {PlaceholderIcon} from '@assets/PlaceholderIcon';
import {IProduct} from '@components/ProductCard/ProductCard';
import {ProductCounter} from '@components/ProductCounter/ProductCounter';
import {
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  Card,
  Center,
  EditIcon,
  HStack,
  Icon,
  Text,
  TrashIcon,
  VStack,
} from '@gluestack-ui/themed';
import {useAppDispatch} from '@hooks/storeHooks';
import {deleteProduct} from '@store/modules/grocerySlice';
import {useMutation} from '@tanstack/react-query';
import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';

interface ICardProductProps {
  product: IProduct;
  onEditItem: (product: IProduct) => void;
}

export const CartProduct = memo(({product, onEditItem}: ICardProductProps) => {
  const {id, name, price, quantity: quantityFromGrocery} = product;
  const dispatch = useAppDispatch();

  const mutation = useMutation({
    mutationFn: deleteGrocery,
  });

  const onDeletePress = () => {
    dispatch(deleteProduct(id));
    mutation.mutate({id});
  };

  const onEditPress = () => {
    onEditItem(product);
  };

  const totalPrice = (quantityFromGrocery || 1) * price;
  return (
    <Card size="md" variant="elevated" m="$3">
      <Center flexDirection="row" justifyContent="space-between">
        <HStack gap={'$3'} reversed={false}>
          <Box bgColor="$yellow400" p={'$3'} borderRadius={'$full'}>
            <Icon as={PlaceholderIcon} w={50} height={50} />
          </Box>
          <VStack alignItems="flex-start">
            <HStack alignItems="center" gap={'$2'}>
              <Text fontWeight="$bold" fontSize={'$xl'}>
                {name}
              </Text>
              <TouchableOpacity onPress={onEditPress}>
                <Icon as={EditIcon} w={'$5'} h={'$5'} />
              </TouchableOpacity>
            </HStack>
            <ProductCounter variant="small" product={product} />
          </VStack>
        </HStack>
        <Button
          size="xl"
          paddingHorizontal={'$2'}
          variant="solid"
          bgColor="$blueGray300"
          $active-bg="$blueGray400"
          isDisabled={false}
          isFocusVisible={false}
          onPress={onDeletePress}>
          <ButtonText width={'$16'} fontWeight="$bold" color="$black">
            $ {totalPrice}
          </ButtonText>
          <ButtonIcon color={'$blueGray700'} as={TrashIcon} w={'$6'} h={'$6'} />
        </Button>
      </Center>
    </Card>
  );
});
