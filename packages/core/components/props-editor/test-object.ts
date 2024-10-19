import type { StoryObj } from '@storybook/react';
import { within } from '@storybook/test';

import { PropEditorTO } from '../prop-editor/test-object';

type PlayFunctionContext = Parameters<NonNullable<StoryObj['play']>>[0];
type StepFn = PlayFunctionContext['step'];

interface Options {
  canvasElement: HTMLElement;
  step: StepFn;
}

export class PropsEditorTO {
  private canvasElement: HTMLElement;
  private step: StepFn;
  private testId: string;

  constructor({ canvasElement, step }: Options, testId: string = 'props-editor') {
    this.step = step;
    this.canvasElement = canvasElement;
    this.testId = testId;
  }

  get editorElement() {
    return within(this.canvasElement).getByTestId(this.testId);
  }

  getValue(propertyName: string): string | boolean {
    const propEditor = new PropEditorTO(
      { canvasElement: this.editorElement, step: this.step },
      `props-editor__${propertyName}`
    );

    return propEditor.getValue();
  }

  /**
   * Заполнить поле пропс-эдитора
   * @param propertyName - название поля
   * @param value - значение
   */
  async fill(propertyName: string, value: string | boolean) {
    const propEditor = new PropEditorTO(
      { canvasElement: this.editorElement, step: this.step },
      `props-editor__${propertyName}`
    );

    await propEditor.setValue(value);
  }
}
