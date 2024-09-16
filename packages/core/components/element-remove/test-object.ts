import type { StoryObj } from '@storybook/react';
import { screen, userEvent, within } from '@storybook/test';

type PlayFunctionContext = Parameters<NonNullable<StoryObj['play']>>[0];
type StepFn = PlayFunctionContext['step'];

interface Options {
  canvasElement: PlayFunctionContext['canvasElement'];
  step: StepFn;
  /** @default 'page-remove' */
  testId?: string;
}

export class ElementRemoveTO {
  private readonly canvasElement: PlayFunctionContext['canvasElement'];
  private readonly step: PlayFunctionContext['step'];
  private readonly testId: string;

  constructor(options: Options) {
    this.canvasElement = options.canvasElement;
    this.step = options.step;
    this.testId = options.testId ?? 'element-remove';
  }

  async clickRemove(): Promise<void> {
    await this.step('Кликаю на кнопку "Удалить"', () =>
      userEvent.click(within(this.canvasElement).getByTestId(this.testId))
    );
  }

  async confirm(): Promise<void> {
    await this.step('Подтверждаю удаление', async () => {
      // screen, а не story, потому что попап в портале рендерится
      const confirm = await screen.findByTestId('element-remove__confirm');
      await userEvent.click(confirm);
    });
  }

  getErrorMessage(): Promise<HTMLElement> {
    return screen.findByTestId('element-remove__error');
  }

  getSuccessMessage(): Promise<HTMLElement> {
    return screen.findByTestId('element-remove__success');
  }
}
