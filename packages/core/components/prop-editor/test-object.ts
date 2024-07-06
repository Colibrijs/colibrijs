import { within, type queries } from '@storybook/test';

type CanvasElement = ReturnType<typeof within<typeof queries>>;

export class PropEditorTO {
  private canvas: CanvasElement;

  constructor(canvasElement: HTMLElement) {
    this.canvas = within(canvasElement);
  }

  getElement(propEditorTestId: string, elementType: 'input' | 'label' | 'description') {
    const component = within(this.canvas.getByTestId(propEditorTestId));
    return component.getByTestId(`prop-editor__${elementType}`);
  }
}
