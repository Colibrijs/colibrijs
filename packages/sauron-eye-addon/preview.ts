import type { Preview } from '@storybook/react';

import { loadComments } from './addon/common/comments';
import type { SauronEyeConfig } from './addon/common/types';
import { withScreenshotsDecorator } from './addon/screenshots-comparator/decorator';

export default {
  decorators: [withScreenshotsDecorator()],

  loaders: [
    async (context) => {
      const config: SauronEyeConfig = context.globals.sauronEye;
      // @ts-expect-error -- всё хорошо, это нужно чтобы в тесте потом обратиться к этому значению
      if (window.pullRequestComments) {
        // @ts-expect-error -- всё хорошо, это нужно чтобы в тесте потом обратиться к этому значению
        return { comments: window.pullRequestComments };
      }

      const pullRequestNumber = Number(config.pullRequestNumber);

      if (!pullRequestNumber || isNaN(pullRequestNumber)) {
        // @ts-expect-error -- всё хорошо, это нужно чтобы в тесте потом обратиться к этому значению
        window.pullRequestComments = [];
        return { comments: [] };
      }

      const comments = await loadComments(config);
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
