import {AccountIcon} from '@assets/AccountIcon';
import {GroceryIcon} from '@assets/GroceryIcon';
import {
  Badge,
  BadgeText,
  Box,
  Divider,
  Icon,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import {MainStackParamList} from '@navigation/Tab';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IMainScreenHeaderProps {
  boughtProductsQuantity: number;
}

export const MainScreenHeader = memo(
  ({boughtProductsQuantity}: IMainScreenHeaderProps) => {
    const {top} = useSafeAreaInsets();
    const navigation =
      useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    const onGroceryPress = () => {
      navigation.navigate('GroceryScreen');
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
          <TouchableOpacity>
            <Icon as={AccountIcon} color="$purple400" w={32} h={32} />
          </TouchableOpacity>
          <Text fontWeight="$bold" color="$coolGray600">
            Products List
          </Text>
          <TouchableOpacity onPress={onGroceryPress}>
            {boughtProductsQuantity ? (
              <Badge
                position="absolute"
                size="md"
                variant="solid"
                bgColor="$red400"
                borderRadius="$full"
                zIndex={10}
                left={-20}
                top={-8}
                action="info">
                <BadgeText fontWeight="$black" color="$white">
                  {boughtProductsQuantity}
                </BadgeText>
              </Badge>
            ) : null}
            <Icon as={GroceryIcon} w={32} h={32} color="$purple400" />
          </TouchableOpacity>
        </Box>
        <Divider bg="$indigo500" $dark-bg="$indigo400" w={'$full'} />
      </VStack>
    );
  },
);
