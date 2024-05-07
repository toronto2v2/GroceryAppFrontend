import {
  VStack,
  Box,
  Icon,
  Divider,
  Text,
  ChevronLeftIcon,
  CloseIcon,
} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IBackHeaderProps {
  title: string;
}

export const BackHeader = memo(({title}: IBackHeaderProps) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const onGoBack = () => {
    navigation.goBack();
  };
  return (
    <VStack w={'$full'} justifyContent="center" alignItems="center">
      <Box
        p="$5"
        pb={'$2'}
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
        w={'$full'}
        pt={top}>
        <TouchableOpacity onPress={onGoBack}>
          <Icon as={ChevronLeftIcon} w={32} h={32} color="$purple400" />
        </TouchableOpacity>
        <Text fontWeight="$bold" color="$coolGray600">
          {title}
        </Text>
        <TouchableOpacity onPress={onGoBack}>
          <Icon as={CloseIcon} w={32} h={32} color="$purple400" />
        </TouchableOpacity>
      </Box>
      <Divider bg="$indigo500" $dark-bg="$indigo400" w={'$full'} />
    </VStack>
  );
});
