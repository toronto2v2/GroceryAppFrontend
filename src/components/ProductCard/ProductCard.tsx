import {PlaceholderIcon} from '@assets/PlaceholderIcon';
import {ProductCounter} from '@components/ProductCounter/ProductCounter';
import {Box, Card, HStack, Icon, Text, VStack} from '@gluestack-ui/themed';
import React, {memo} from 'react';

export interface IProduct {
  id: string;
  name: string;
  price: number;
  type: 'fruit' | 'vegetable';
  quantity?: number;
}

interface IProductCardProps {
  product: IProduct;
}

export const ProductCard = memo(({product}: IProductCardProps) => {
  return (
    <Card
      p="$2"
      borderRadius="$lg"
      h={'$40'}
      w={'$40'}
      m="$3"
      justifyContent="space-between">
      <Box justifyContent="center" alignItems="center">
        <Icon as={PlaceholderIcon} w={50} height={50} />
      </Box>
      <HStack>
        <VStack flex={1} justifyContent="center">
          <Text size="lg" fontWeight="$black">
            $ {product.price}
          </Text>
          <Text size="sm">{product.name}</Text>
        </VStack>
        <ProductCounter product={product} variant="big" />
      </HStack>
    </Card>
  );
});
