import type { Preview } from '@storybook/react';

import '../global.css';
import './global-storybook.css';
import { withReactQueryDecorator } from '../components/react-query-provider/mocked';
import { withMockedApi } from '../hooks/use-api/mocked';
import { withMockedRouter } from '../hooks/use-router/mocked';

export default {
  decorators: [withReactQueryDecorator(), withMockedApi(), withMockedRouter()],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
} satisfies Preview;
