import {navigationRef} from '@navigation/Router';
import {useEffect} from 'react';

export const useAuth = () => {
  // mock auth
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (navigationRef.isReady()) {
        navigationRef.reset({
          index: 0,
          routes: [{name: 'MainStack'}],
        });
      }
    }, 800);

    return () => {
      clearTimeout(timerId);
    };
  });
};
