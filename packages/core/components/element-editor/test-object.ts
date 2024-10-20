import type { StoryObj } from '@storybook/react';
import { expect, screen, userEvent, waitFor } from '@storybook/test';

import { ElementRemoveTO } from '../element-remove/test-object';
import { PropsEditorTO } from '../props-editor/test-object';

type PlayFunctionContext = Parameters<NonNullable<StoryObj['play']>>[0];
type StepFn = PlayFunctionContext['step'];

interface Options {
  canvasElement: HTMLElement;
  step: StepFn;
}

export class ElementEditorTO {
  private step: StepFn;

  constructor({ step }: Options) {
    this.step = step;
  }

  async getPropsEditorTO(): Promise<PropsEditorTO> {
    await this.step('Жду появления редактора пропсов', async () => {
      await waitFor(() => expect(screen.getByTestId('props-editor')).toBeVisible());
    });

    return new PropsEditorTO({
      canvasElement: screen.getByLabelText('Редактирование элемента'),
      step: this.step,
    });
  }

  getElementRemoveTO(): ElementRemoveTO {
    return new ElementRemoveTO({
      canvasElement: screen.getByLabelText('Редактирование элемента'),
      step: this.step,
    });
  }

  /** Возвращает информацию о том видна ли кнопка сохранения */
  isSaveButtonVisible(): boolean {
    const saveButton = screen.queryByTestId('element-editor__save');

    return Boolean(saveButton);
  }

  /** Возвращает заголовок редактируемого элемента */
  async getTitle(): Promise<string> {
    const titleElement = await screen.findByTestId('element-editor__title');

    return titleElement.textContent!;
  }

  /** Возвращает информацию об ошибке, которая могла возникнуть при сохранении */
  getErrorMessage(): string | null {
    return screen.getByTestId('element-editor__error').textContent;
  }

  async clickClose() {
    await this.step('Кликаю на кнопку "Закрыть"', async () => {
      await userEvent.click(screen.getByLabelText('Close'));
    });
  }

  async clickSave() {
    await this.step('Кликаю на кнопку "сохранить"', async () => {
      await userEvent.click(screen.getByTestId('element-editor__save'));
    });
  }

  async isOpened(): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const dialog = screen.queryByLabelText('Редактирование элемента');

    return Boolean(dialog);
  }
}
