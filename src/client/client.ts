import {QueryClient} from '@tanstack/react-query';

export const BASE_URL = 'https://groceryappbackend-rai2.onrender.com';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
    },
  },
});
