import React, {memo, useState} from 'react';
import {
  ModalBackdrop,
  Text,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  Heading,
  ModalCloseButton,
  Icon,
  CloseIcon,
  ModalBody,
  VStack,
  Input,
  InputField,
  ModalFooter,
  ButtonText,
  FormControl,
} from '@gluestack-ui/themed';
import {IProduct} from '@components/ProductCard/ProductCard';
import {useAppDispatch} from '@hooks/storeHooks';
import {updateProduct} from '@store/modules/grocerySlice';
import {useMutation} from '@tanstack/react-query';
import {updateGrocery} from '@api/updateGrocery/updateGrocery';

interface IEditNameModal {
  product: IProduct | null;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  finalFocusRef: React.RefObject<any>;
  showModal: boolean;
}

export const EditNameModal = memo(
  ({finalFocusRef, product, setShowModal, showModal}: IEditNameModal) => {
    const [value, setValue] = useState('');
    const [invalid, setInvalid] = useState(false);
    const dispatch = useAppDispatch();

    const mutation = useMutation({
      mutationFn: updateGrocery,
    });

    const onChangeText = (text: string) => {
      setValue(text);
      setInvalid(!text ? true : false);
    };

    const onBlur = () => {
      setInvalid(!value ? true : false);
    };

    const onClose = () => {
      setValue('');
      setInvalid(false);
      setShowModal(false);
    };

    const onSubmit = () => {
      if (product && value) {
        dispatch(
          updateProduct({
            id: product?.id || '',
            changes: {
              name: value,
            },
          }),
        );
        mutation.mutate({
          ...product,
          name: value,
          quantity: product.quantity || 0,
        });
        onClose();
      }
    };

    return (
      <Modal
        isOpen={showModal}
        size="lg"
        onClose={onClose}
        finalFocusRef={finalFocusRef}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Edit "{product?.name}" name</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <VStack gap={'$3'}>
              <Text>Please enter the new name for your product</Text>
              <FormControl isInvalid={invalid}>
                <Input variant="rounded" size="md">
                  <InputField
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChangeText}
                    autoCorrect={false}
                    autoComplete="off"
                    spellCheck={false}
                    placeholder="Enter Text here"
                  />
                </Input>
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="negative"
              $active-bg="$red50"
              mr="$3"
              onPress={onClose}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              variant="outline"
              size="sm"
              action="positive"
              $active-bg="$success50"
              onPress={onSubmit}>
              <ButtonText>Submit</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  },
);
