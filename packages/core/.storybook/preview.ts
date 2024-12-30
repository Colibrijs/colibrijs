import type { Preview } from '@storybook/react';
import { message } from 'antd';
import React from 'react';

import '../global.css';
import './global-storybook.css';

import { sauronEyeConfig } from './sauron-eye-config';
import { withReactQueryDecorator } from '../components/react-query-provider/mocked';
import { withMockedApi } from '../hooks/use-api/mocked';
import { withMockedRouter } from '../hooks/use-router/mocked';
import { withMockedSchemaLoader } from '../hooks/use-schema/mocked';

window.React = React;

export default {
  decorators: [
    withReactQueryDecorator(),
    withMockedApi(),
    withMockedRouter(),
    withMockedSchemaLoader(),
    (Story) => {
      message.destroy();
      return React.createElement(Story);
    },
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  globals: {
    sauronEye: sauronEyeConfig,
  },
} satisfies Preview;
