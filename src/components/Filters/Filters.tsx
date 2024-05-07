import {Button, ButtonText, HStack} from '@gluestack-ui/themed';
import {useAppDispatch, useAppSelector} from '@hooks/storeHooks';
import {EFilters, setFilter} from '@store/modules/filterSlice';
import React, {memo} from 'react';

export const Filters = memo(() => {
  const activeFilter = useAppSelector(state => state.filters.filter);
  const dispatch = useAppDispatch();
  const onFilterPress = (filter: EFilters) => {
    dispatch(setFilter(filter));
  };

  const isFruitsActive = activeFilter === EFilters.Fruits;
  const isVegetablesActive = activeFilter === EFilters.Vegetables;
  return (
    <HStack p={'$3'} justifyContent="space-around" reversed={false}>
      <Button
        size="sm"
        variant={isFruitsActive ? 'solid' : 'outline'}
        action="primary"
        w={'$40'}
        bgColor={isFruitsActive ? '$purple800' : undefined}
        $active-bg="$purple500"
        borderRadius={'$xl'}
        isDisabled={false}
        isFocusVisible={false}
        onPress={() => onFilterPress(EFilters.Fruits)}>
        <ButtonText fontSize={'$sm'}>Fruits</ButtonText>
      </Button>
      <Button
        size="sm"
        variant={isVegetablesActive ? 'solid' : 'outline'}
        w={'$40'}
        $active-bg="$purple500"
        borderRadius={'$xl'}
        bgColor={isVegetablesActive ? '$purple800' : undefined}
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        onPress={() => onFilterPress(EFilters.Vegetables)}>
        <ButtonText fontSize={'$sm'}>Vegetables</ButtonText>
      </Button>
    </HStack>
  );
});
