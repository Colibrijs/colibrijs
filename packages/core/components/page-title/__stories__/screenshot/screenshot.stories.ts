import PageTitleStoriesMeta, { type PageTitleMeta, type Story } from '../page-title.stories';

export default {
  ...PageTitleStoriesMeta,
  title: 'PageTitle/tests/screenshot',
} satisfies PageTitleMeta;

export const Screenshoteg: Story = {
  name: 'Заголовок с названием страницы и кнопка удаления страницы выровнены вертикально по центру',
};

export const ScreenshotegNambaTwo: Story = {
  name: 'Заголовок с названием страницы и кнопка удаления страницы выровнены вертикально по центру',
};
