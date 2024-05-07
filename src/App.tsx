import {RootRouter} from '@navigation/Router';
import {store} from '@store/configureStore';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '@client/client';

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config}>
        <SafeAreaProvider style={styles.flex}>
          <Provider store={store}>
            <RootRouter />
          </Provider>
        </SafeAreaProvider>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default App;
