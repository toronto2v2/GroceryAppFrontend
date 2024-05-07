import {QueryClient} from '@tanstack/react-query';

export const BASE_URL = 'http://localhost:8080';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
    },
  },
});
