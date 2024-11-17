import PagesListStoriesMeta, { type PagesListMeta, type Story } from '../pages-list.stories';

export default {
  ...PagesListStoriesMeta,
  title: 'PagesList/tests/screenshot',
} satisfies PagesListMeta;

export const Screenshot: Story = {
  name: 'Заголовок с названием страницы и кнопка удаления страницы выровнены вертикально по центру',
};
