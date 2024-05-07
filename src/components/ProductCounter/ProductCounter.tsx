import {updateGrocery} from '@api/updateGrocery/updateGrocery';
import {HorizontalCounter} from '@components/HorizontalCounter/HorizontalCounter';
import {IProduct} from '@components/ProductCard/ProductCard';
import {VerticalCounter} from '@components/VerticalCounter/VerticalCounter';
import {useAppDispatch, useAppSelector} from '@hooks/storeHooks';
import {
  addProduct,
  deleteProduct,
  selectAddedProducts,
} from '@store/modules/grocerySlice';
import {useMutation} from '@tanstack/react-query';
import React, {useRef} from 'react';

interface IProductCounterProps {
  product: IProduct;
  variant: 'small' | 'big';
}

export const ProductCounter = ({
  product: {quantity, name, price, type, id},
  variant,
}: IProductCounterProps) => {
  const dispatch = useAppDispatch();
  const grocery = useAppSelector(selectAddedProducts);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const mutation = useMutation({
    mutationFn: updateGrocery,
  });

  const onQuantityChange = (action: 'plus' | 'minus') => {
    const newQuantity =
      action === 'plus'
        ? (quantity || 0) + 1
        : Math.max((quantity || 0) - 1, 0);

    const isInGrocery = grocery.find(g => g.id === id);

    const updatedEntity = {
      id,
      name: isInGrocery ? isInGrocery.name : name,
      price,
      quantity: newQuantity,
      type,
    };

    if (newQuantity === 0) {
      dispatch(deleteProduct(id));
    } else {
      dispatch(addProduct(updatedEntity));
    }

    // clear timerId if it exist
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // execute API call after delay
    timeoutRef.current = setTimeout(() => {
      mutation.mutate(updatedEntity);
    }, 1000);
  };

  return (
    <>
      {variant === 'big' ? (
        <VerticalCounter
          onQuantityChange={onQuantityChange}
          quantity={quantity || 0}
        />
      ) : (
        <HorizontalCounter
          onQuantityChange={onQuantityChange}
          quantity={quantity || 0}
        />
      )}
    </>
  );
};
