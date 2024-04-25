import type { Preview } from '@storybook/react';

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
