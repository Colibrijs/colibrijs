import type { Preview } from '@storybook/react';

import '../global.css';
import './global-storybook.css';
import { withMockedApi } from '../hooks/use-api/mocked';

export default {
  decorators: [withMockedApi()],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
} satisfies Preview;
