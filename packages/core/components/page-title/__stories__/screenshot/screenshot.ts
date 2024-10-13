import PageTitleStoriesMeta, { type PageTitleMeta, type Story } from '../page-title.stories';

// eslint-disable-next-line import/no-default-export -- переименовать файл в .stories.ts, когда придет время и всё будет работать
export default {
  ...PageTitleStoriesMeta,
  title: 'PageTitle/tests/screenshot',
} satisfies PageTitleMeta;

export const Screenshot: Story = {
  name: 'Заголовок с названием страницы и кнопка удаления страницы выровнены вертикально по центру',
};
