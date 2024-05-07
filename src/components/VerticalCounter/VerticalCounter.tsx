import React, {memo} from 'react';
import {
  Box,
  HStack,
  Text,
  VStack,
  ButtonIcon,
  AddIcon,
  RemoveIcon,
  Button,
} from '@gluestack-ui/themed';

export interface ICounterProps {
  quantity: number;
  onQuantityChange: (action: 'plus' | 'minus') => void;
}

export const VerticalCounter = memo(
  ({quantity, onQuantityChange}: ICounterProps) => {
    return (
      <Box
        flex={1}
        h="$20"
        bg="$blueGray200"
        borderRadius={'$md'}
        justifyContent="center"
        alignItems="flex-end">
        <HStack alignItems="center" space="md" p={'$1.5'}>
          <Text size="xl">{quantity}</Text>
          <VStack space="sm">
            <Button
              onPress={() => onQuantityChange('plus')}
              bgColor="$purple200"
              paddingHorizontal={'$1'}
              paddingVertical={'$1'}
              p={'$0'}
              size="xs"
              borderRadius={'$sm'}
              $active-bg="$purple100"
              borderColor="$purple300"
              borderWidth={1}>
              <ButtonIcon
                color={'$blueGray500'}
                size={'md'}
                as={AddIcon}
                textAlign="center"
              />
            </Button>
            <Button
              onPress={() => onQuantityChange('minus')}
              size="xs"
              paddingHorizontal={'$1'}
              paddingVertical={'$1'}
              bgColor="$purple200"
              borderRadius={'$sm'}
              $active-bg="$purple100"
              borderColor="$purple300"
              borderWidth={1}>
              <ButtonIcon
                color={'$blueGray500'}
                size={'md'}
                as={RemoveIcon}
                textAlign="center"
              />
            </Button>
          </VStack>
        </HStack>
      </Box>
    );
  },
);
