import { textElement } from '@colibrijs/mocks/elements';
import { expect, fn } from '@storybook/test';

import ElementAddStoriesMeta from './element-editor.stories';
import type { ElementEditorMeta, ElementEditorStory } from './element-editor.stories';
import { ElementEditorTO } from '../test-object';

export default {
  ...ElementAddStoriesMeta,
  title: 'ElementEditor/tests/Props',
} satisfies ElementEditorMeta;

export const OpenProp: ElementEditorStory = {
  name: 'При передаче пропса open со значением true, модалка открыта',
  args: { open: true },
  play: async ({ canvasElement, step }) => {
    const elementEditor = new ElementEditorTO({ canvasElement, step });

    expect(await elementEditor.isOpened(), 'Проверяю, что модалка открыта').toBe(true);
  },
};

export const OnCloseProp: ElementEditorStory = {
  name: 'При клике на крестик, вызывается onClose пропс',
  args: { open: true, onClose: fn() },
  play: async ({ args, canvasElement, step }) => {
    const elementEditor = new ElementEditorTO({ canvasElement, step });

    await elementEditor.clickClose();

    expect(args.onClose).toHaveBeenCalled();
  },
};

export const ElementProps: ElementEditorStory = {
  name: 'Значения пропсов элемента выводятся в пропс-эдиторе',
  args: { element: textElement },
  play: async ({ args, canvasElement, step }) => {
    const elementEditor = new ElementEditorTO({ canvasElement, step });
    const propsEditor = await elementEditor.getPropsEditorTO();

    expect(
      propsEditor.getValue('text'),
      'Проверяю, что значение редактора равно значению элемента в пропсе'
      // @ts-expect-error -- не верит что поле text есть в props
    ).toBe(args.element.props.text);
  },
};

export const OnEditProp: ElementEditorStory = {
  name: 'При изменении значений пропсов элемента, вызывается onEdit с новыми пропсами элемента',
  args: { element: textElement, onEdit: fn() },
  play: async ({ args, canvasElement, step }) => {
    const elementEditor = new ElementEditorTO({ canvasElement, step });
    const propsEditor = await elementEditor.getPropsEditorTO();

    await propsEditor.fill('text', 'а');

    expect(
      args.onEdit,
      'Проверяю, что пропс onEdit был вызван с новыми пропсами'
    ).toHaveBeenCalledWith({ text: 'а' });
  },
};

export const OnRemoveProp: ElementEditorStory = {
  name: 'Клик на мусорку в положительном исходе вызывает onRemove пропс',
  args: { onRemove: fn() },
  play: async ({ args, step }) => {
    const elementRemove = new ElementEditorTO({
      canvasElement: document.body,
      step,
    }).getElementRemoveTO();

    await elementRemove.clickRemove();
    await elementRemove.confirm();

    expect(args.onRemove, 'Проверяю что пропс onRemove был вызван').toHaveBeenCalled();
  },
};
