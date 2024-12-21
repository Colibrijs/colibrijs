import type { Preview } from '@storybook/react';

import { loadComments } from './addon/common/comments';
import { withScreenshotsDecorator } from './addon/screenshots-comparator/decorator';

export default {
  decorators: [withScreenshotsDecorator()],

  loaders: [
    async () => {
      // @ts-expect-error -- всё хорошо, это нужно чтобы в тесте потом обратиться к этому значению
      if (window.pullRequestComments) {
        // @ts-expect-error -- всё хорошо, это нужно чтобы в тесте потом обратиться к этому значению
        return { comments: window.pullRequestComments };
      }

      const pullRequestNumber = Number(process.env.PULL_REQUEST_NUMBER);

      if (!pullRequestNumber || isNaN(pullRequestNumber)) {
        // @ts-expect-error -- всё хорошо, это нужно чтобы в тесте потом обратиться к этому значению
        window.pullRequestComments = [];
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
