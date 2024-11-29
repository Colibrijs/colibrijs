import { withScreenshotsDecorator } from '@colibrijs/test-utils';
import type { Preview } from '@storybook/react';
import { message } from 'antd';
import React from 'react';

import '../global.css';
import './global-storybook.css';
import { loadComments } from './screenshot-panel/comments';

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
    withScreenshotsDecorator(),
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

  loaders: [
    async () => {
      // @ts-expect-error -- всё хорошо, это нужно чтобы в тесте потом обратиться к этому значению
      if (window.pullRequestComments) {
        // @ts-expect-error -- всё хорошо, это нужно чтобы в тесте потом обратиться к этому значению
        return { comments: window.pullRequestComments };
      }

      const pullRequestNumber = Number(process.env.PULL_REQUEST_NUMBER);

      if (!pullRequestNumber || isNaN(pullRequestNumber)) {
        return { comments: [] };
      }

      const comments = await loadComments(pullRequestNumber);
      // @ts-expect-error -- всё хорошо, это нужно чтобы в тесте потом обратиться к этому значению
      window.pullRequestComments = comments;

      return { comments };
    },
  ],

  globalTypes: {
    screenshotsComparatorActive: {
      defaultValue: false,
    },
  },
} satisfies Preview;
