import { withScreenshotsDecorator } from '@colibrijs/test-utils';

import PageTitleStoriesMeta, { type PageTitleMeta, type Story } from '../page-title.stories';

const pullRequestComments = window.pullRequestComments;
console.log(pullRequestComments, 'pullRequestComments');

export default {
  ...PageTitleStoriesMeta,
  title: 'PageTitle/tests/screenshot',
  decorators: [withScreenshotsDecorator()],
} satisfies PageTitleMeta;

export const Screenshot: Story = {
  name: 'Заголовок с названием страницы и кнопка удаления страницы выровнены вертикально по центру',
};
