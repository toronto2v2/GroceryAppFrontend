import {ICounterProps} from '@components/VerticalCounter/VerticalCounter';
import {
  Box,
  HStack,
  ButtonIcon,
  AddIcon,
  RemoveIcon,
  Button,
  Text,
} from '@gluestack-ui/themed';
import React, {memo} from 'react';

export const HorizontalCounter = memo(
  ({onQuantityChange, quantity}: ICounterProps) => {
    return (
      <Box
        flex={1}
        borderRadius={'$md'}
        justifyContent="center"
        alignItems="flex-end">
        <HStack space="md" alignItems="center">
          <Button
            onPress={() => onQuantityChange('plus')}
            bgColor="$purple200"
            borderRadius={'$sm'}
            $active-bg="$purple100"
            borderColor="$purple300"
            paddingHorizontal={'$1'}
            paddingVertical={'$1'}
            height={'auto'}
            borderWidth={1}>
            <ButtonIcon
              color={'$blueGray500'}
              size={'md'}
              as={AddIcon}
              textAlign="center"
            />
          </Button>
          <Text textAlign="center" w={'$7'} size="xl">
            {quantity || 0}
          </Text>
          <Button
            onPress={() => onQuantityChange('minus')}
            bgColor="$purple200"
            borderRadius={'$sm'}
            $active-bg="$purple100"
            borderColor="$purple300"
            paddingHorizontal={'$1'}
            paddingVertical={'$1'}
            height={'auto'}
            borderWidth={1}>
            <ButtonIcon
              color={'$blueGray500'}
              size={'md'}
              as={RemoveIcon}
              textAlign="center"
            />
          </Button>
        </HStack>
      </Box>
    );
  },
);
