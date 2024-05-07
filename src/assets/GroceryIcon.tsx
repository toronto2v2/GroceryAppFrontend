import {createIcon} from '@gluestack-ui/themed';
import * as React from 'react';
import {Path} from 'react-native-svg';

export const GroceryIcon = createIcon({
  viewBox: '0 0 24 24',
  path: (
    <>
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M8 5 6 9m10-4 2 4"
      />
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 10h-1.198a1 1 0 0 0-.976.783l-1.478 6.65A2 2 0 0 1 15.396 19H8.604a2 2 0 0 1-1.952-1.566l-1.478-6.65A1 1 0 0 0 4.198 10H3a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2Zm-10 2a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Zm4 0a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Z"
        clipRule="evenodd"
      />
    </>
  ),
});
