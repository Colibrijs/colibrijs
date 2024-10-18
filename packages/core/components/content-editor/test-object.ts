import type { StoryObj } from '@storybook/react';
import { screen, userEvent, within } from '@storybook/test';

import { ElementAddTO } from '../element-add/test-object';

type PlayFunctionContext = Parameters<NonNullable<StoryObj['play']>>[0];
type StepFn = PlayFunctionContext['step'];

interface Options {
  canvasElement: PlayFunctionContext['canvasElement'];
  step: StepFn;
  /** @default 'content-editor' */
  testId?: string;
}

export class ContentEditorTO {
  private readonly canvasElement: PlayFunctionContext['canvasElement'];
  private readonly step: PlayFunctionContext['step'];
  private readonly testId: string;

  constructor(options: Options) {
    this.canvasElement = options.canvasElement;
    this.step = options.step;
    this.testId = options.testId ?? 'content-editor';
  }

  get root() {
    const canvas = within(this.canvasElement);
    return within(canvas.getByTestId(this.testId));
  }

  /** Возвращает элемент в дереве, который относится к элементу в контенте */
  getTreeNodeTitle(elementId: string): Promise<HTMLElement> {
    return this.root.findByTestId(`content-editor__${elementId}`);
  }

  /** Выбирает элемент с указанным id */
  async selectElement(elementId: string): Promise<void> {
    const element = await this.getTreeNodeTitle(elementId);
    await this.step(`Кликаю на элемент с id ${elementId}`, () => userEvent.click(element));
    await this.step(
      'Жду пока сработает анимация открытия',
      () => new Promise((resolve) => setTimeout(resolve, 400))
    );
  }

  getAddElementTO(): ElementAddTO {
    return new ElementAddTO({
      canvasElement: this.canvasElement,
      step: this.step,
    });
  }

  async startAddingElement(): Promise<void> {
    const addElementButton = this.root.getByTestId('content-editor__add-element-button');
    await this.step('Кликаю на кнопку "Добавить элемент"', () => userEvent.click(addElementButton));
  }

  async getErrorElement() {
    return await screen.findByTestId('content-editor__error');
  }

  /** Возвращает html-элемент, который относится к редактору элемента контента */
  getEditorDrawerElement(): Promise<HTMLElement | null> {
    return this.findElement('element-editor-drawer', screen);
  }

  /** Возвращает html-элемент, который относится к названию редактируемого элемента контента */
  getEditorDrawerTitle(): Promise<HTMLElement | null> {
    return this.findElement('element-editor-drawer__title', screen);
  }

  /**
   * Ведёт себя так же как findQuery,
   * но если элемент найти не удалось, возвращает null, а не выбрасывает ошибку
   * @param testId - тестовый id элемента
   * @param root - где искать, по умолчанию в корне, но если какой-то элемент рендерится в портале,
   *               можно передать screen
   * @param timeout - таймаут поиска
   */
  private async findElement(
    testId: string,
    root = this.root,
    timeout: number = 1000
  ): Promise<HTMLElement | null> {
    const element = root.queryByTestId(testId);

    if (element || timeout <= 0) {
      return element;
    }

    await new Promise((resolve) => setTimeout(resolve, 50));
    return this.findElement(testId, root, timeout - 50);
  }
}
