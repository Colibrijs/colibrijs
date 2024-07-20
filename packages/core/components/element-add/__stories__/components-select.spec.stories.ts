import { textComponent, textComponentSchema } from '@colibrijs/mocks/components';
import { getDefaultValues } from '@colibrijs/schema';
import { expect } from '@storybook/test';

import ElementAddStoriesMeta from './element-add.stories';
import type { ElementAddMeta, ElementAddStory } from './element-add.stories';
import { withMockedApi } from '../../../hooks/use-api/mocked';
import { ElementAddTO } from '../test-object';

export default {
  ...ElementAddStoriesMeta,
  title: 'ElementAdd/tests/components-select',
} satisfies ElementAddMeta;

export const ComponentsFromApi: ElementAddStory = {
  name: 'В опциях селекта компоненты, которые возвращает api.components.get',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        components: {
          get: () => Promise.resolve([textComponent]),
        },
      });
    }),
  ],
  play: async (context) => {
    const elementAdd = new ElementAddTO(context);
    await elementAdd.waitForComponentsLoading();
    await elementAdd.clickOnComponentsSelect();
    const options = await elementAdd.getComponentsOptions();

    expect(
      options,
      'Убеждаюсь что в опшинах текст = component.name, value = component.id'
    ).toStrictEqual([{ text: textComponent.name, value: textComponent.id }]);
  },
};

export const NullByDefault: ElementAddStory = {
  name: 'По умолчанию, ни один из компонентов не выбран',
  play: async (context) => {
    const elementAdd = new ElementAddTO(context);
    const selected = elementAdd.getSelectedComponentId();

    expect(selected, 'Убеждаюсь, что по умолчанию ничего не выбрано').toBe(null);
  },
};

export const ComponentsSelectable: ElementAddStory = {
  name: 'Когда пользователь выбирает один из компонентов, компонент становится выбранным',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        components: {
          get: () => Promise.resolve([textComponent]),
        },
      });
    }),
  ],
  play: async (context) => {
    const elementAdd = new ElementAddTO(context);
    await elementAdd.selectComponent(textComponent.id);
    const selected = elementAdd.getSelectedComponentId();

    expect(selected, 'Убеждаюсь, что при выборе компонента, он становится выбранным').toBe(
      textComponent.id
    );
  },
};

export const DefaultPropsForComponent: ElementAddStory = {
  name: 'Когда пользователь выбирает один из компонентов, пропсы заполняются значениями по умолчанию',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        components: {
          get: () => Promise.resolve([textComponent]),
        },
      });
    }),
  ],
  play: async (context) => {
    const elementAdd = new ElementAddTO(context);
    await elementAdd.selectComponent(textComponent.id);
    const propsElement = await elementAdd.findPropsElement();

    await expect(
      propsElement,
      'Убеждаюсь что пропсы элемента равны дефолтным пропсам схемы компонента'
    ).toHaveValue(JSON.stringify(getDefaultValues(textComponentSchema), null, 2));
  },
};
