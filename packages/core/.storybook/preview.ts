import type { Preview } from '@storybook/react';

import '../global.css';
import './global-storybook.css';
import { withReactQueryDecorator } from '../components/react-query-provider/mocked';
import { withMockedApi } from '../hooks/use-api/mocked';

export default {
  decorators: [withReactQueryDecorator(), withMockedApi()],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
} satisfies Preview;
