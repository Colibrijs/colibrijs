import { withScreenshotsDecorator } from '@colibrijs/test-utils';

import PageTitleStoriesMeta, { type PageTitleMeta, type Story } from '../page-title.stories';

export default {
  ...PageTitleStoriesMeta,
  title: 'PageTitle/tests/screenshod',
  decorators: [withScreenshotsDecorator()],
} satisfies PageTitleMeta;

export const Screenshotz: Story = {
  name: 'Заголовок с названием страницы и кнопка удаления страницы выровнены вертикально по центру',
};
