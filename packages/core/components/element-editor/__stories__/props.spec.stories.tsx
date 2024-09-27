import { exampleElement } from '@colibrijs/mocks/elements';
import { expect, fn, screen, userEvent, fireEvent } from '@storybook/test';

import ElementAddStoriesMeta from './element-editor.stories';
import type { ElementEditorMeta, ElementEditorStory } from './element-editor.stories';
import { ElementRemoveTO } from '../../element-remove/test-object';

export default {
  ...ElementAddStoriesMeta,
  title: 'ElementEditor/tests/Props',
} satisfies ElementEditorMeta;

export const OpenProp: ElementEditorStory = {
  name: 'При передаче open пропса, модалка открыта',
  args: { open: true },
  play: async () => {
    const modal = await screen.findByTestId('element-editor');

    expect(modal).toBeVisible();
  },
};

export const OnCloseProp: ElementEditorStory = {
  name: 'При клике на крестик, вызывается onClose пропс',
  args: { open: true, onClose: fn() },
  play: async ({ args }) => {
    const modal = await screen.findByTestId('element-editor');
    const closeButton = modal.querySelector('.ant-drawer-close')!;
    await userEvent.click(closeButton);

    expect(args.onClose).toHaveBeenCalled();
  },
};

export const ElementProps: ElementEditorStory = {
  name: 'element.props выводится в textarea по дефолту',
  args: { element: exampleElement },
  play: async ({ args }) => {
    const textarea: HTMLTextAreaElement = await screen.findByTestId('element-editor__textarea');
    const elementProps = JSON.stringify(args.element.props, null, 2);

    expect(textarea).toHaveValue(elementProps);
  },
};

export const OnEditProp: ElementEditorStory = {
  name: 'При изменении в textarea, вызывается onEdit пропс с передачей измененного объекта',
  args: { element: exampleElement, onEdit: fn() },
  play: async ({ args }) => {
    const textarea: HTMLTextAreaElement = await screen.findByTestId('element-editor__textarea');
    fireEvent.input(textarea, { target: { value: '{\n "title": "Заголовок1"\n}' } });

    expect(args.onEdit).toHaveBeenCalledWith({ title: 'Заголовок1' });
  },
};

export const OnRemoveProp: ElementEditorStory = {
  name: 'Клик на мусорку в положительном исходе вызывает onRemove пропс',
  args: { onRemove: fn() },
  play: async ({ args, step }) => {
    const modal = await screen.findByTestId('element-editor');
    const elementRemove = new ElementRemoveTO({ canvasElement: modal, step });
    await elementRemove.clickRemove();
    await elementRemove.confirm();

    expect(args.onRemove).toHaveBeenCalled();
  },
};
