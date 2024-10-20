import type { StoryObj } from '@storybook/react';
import { screen, userEvent, within } from '@storybook/test';

import { ElementAddTO } from '../element-add/test-object';
import { ElementEditorTO } from '../element-editor/test-object';

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
    return screen.findByTestId(`content-editor__element-${elementId}`);
  }

  /** Возвращает список отрендеренных элементов */
  getElementsIds(): string[] {
    const elementsTree = screen.getByTestId('content-editor__elements-tree');
    const elements = elementsTree.querySelectorAll('[data-testid^="content-editor__element-"]');

    return Array.from(elements).map((element) => {
      const [, id] = element.getAttribute('data-testid')!.split('content-editor__element-');
      return id!;
    });
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

  getElementEditorTO(): ElementEditorTO {
    return new ElementEditorTO({ canvasElement: this.canvasElement, step: this.step });
  }

  async startAddingElement(): Promise<void> {
    const addElementButton = screen.getByTestId('content-editor__add-element-button');
    await this.step('Кликаю на кнопку "Добавить элемент"', () => userEvent.click(addElementButton));
  }

  async getErrorElement() {
    return await screen.findByTestId('content-editor__error');
  }
}
