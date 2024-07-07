import { userEvent, within, type queries } from '@storybook/test';

type ComponentElement = ReturnType<typeof within<typeof queries>>;

export class PropEditorTO {
  private component: ComponentElement;

  constructor(canvasElement: HTMLElement, testId: string) {
    this.component = within(within(canvasElement).getByTestId(testId));
  }

  getPropertyName() {
    return this.component.getByTestId('prop-editor__label');
  }

  getPropertyDescription() {
    return this.component.getByTestId('prop-editor__description');
  }

  getInput() {
    return this.component.getByTestId('prop-editor__input');
  }

  getSwitcher() {
    return this.component.getByTestId('prop-editor__switcher');
  }

  async setValue(value: string) {
    const input = this.getInput();
    await userEvent.type(input, value);
  }
}
