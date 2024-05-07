import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  children: React.ReactNode;
  withoutTop?: boolean;
}

export const SafeArea = ({children, withoutTop}: Props) => {
  const {top, bottom} = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.flex,
        {paddingTop: withoutTop ? 0 : top, paddingBottom: bottom},
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
