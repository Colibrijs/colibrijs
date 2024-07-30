import type { StoryObj } from '@storybook/react';
import { userEvent, within, type queries } from '@storybook/test';

type ComponentElement = ReturnType<typeof within<typeof queries>>;
type PlayFunctionContext = Parameters<NonNullable<StoryObj['play']>>[0];
type StepFn = PlayFunctionContext['step'];

interface Options {
  canvasElement: HTMLElement;
  step: StepFn;
}

export class PropEditorTO {
  private editorElement: HTMLElement;
  private component: ComponentElement;
  private testId: string;
  private step: StepFn;

  constructor({ canvasElement, step }: Options, testId: string) {
    this.step = step;
    this.editorElement = within(canvasElement).getByTestId(testId);
    this.component = within(this.editorElement);
    this.testId = testId;
  }

  getPropertyName() {
    return this.component.getByTestId(`${this.testId}__label`);
  }

  getPropertyDescription() {
    return this.component.getByTestId('prop-editor__description');
  }

  getInput(): HTMLInputElement {
    return this.component.getByTestId('prop-editor__input');
  }

  getSwitcher() {
    return this.component.getByTestId('prop-editor__switcher');
  }

  async toggleSwitcher() {
    await this.step('Переключаю свитчер', async () => {
      const switcher = this.getSwitcher();
      await userEvent.click(switcher);
    });
  }

  getValue() {
    const { type } = this.editorElement.dataset;

    if (type === 'boolean') {
      return this.getSwitcher().ariaChecked === 'true';
    } else {
      return this.getInput().value;
    }
  }

  async setValue(value: string | boolean) {
    const { type } = this.editorElement.dataset;

    if (type === 'boolean') {
      const switcher = this.getSwitcher();
      if (value === true && switcher.ariaChecked === 'false') {
        await this.step('Привожу свитчер в чекнутое состояние', async () => {
          await userEvent.click(switcher);
        });
      }
      if (value === false && switcher.ariaChecked === 'true') {
        await this.step('Привожу свитчер в нечекнутое состояние', async () => {
          await userEvent.click(switcher);
        });
      }
    } else {
      await this.step('Ввожу значение в инпут', async () => {
        const input = this.getInput();
        await userEvent.type(input, value as string);
      });
    }
  }
}
