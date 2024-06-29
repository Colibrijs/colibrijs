import type { StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';

type PlayFunctionContext = Parameters<NonNullable<StoryObj['play']>>[0];
type StepFn = PlayFunctionContext['step'];

interface Options {
  canvasElement: PlayFunctionContext['canvasElement'];
  step: StepFn;
  /** @default 'content-editor-layout' */
  testId?: string;
}

export class ContentEditorLayoutTO {
  private readonly canvasElement: PlayFunctionContext['canvasElement'];
  private readonly step: PlayFunctionContext['step'];
  private readonly testId: string;

  constructor(options: Options) {
    this.canvasElement = options.canvasElement;
    this.step = options.step;
    this.testId = options.testId ?? 'content-editor-layout';
  }

  private get root() {
    const canvas = within(this.canvasElement);
    return within(canvas.getByTestId(this.testId));
  }

  async startEdit(): Promise<void> {
    await this.step('Кликаю на кнопку "Открыть редактор"', async () => {
      await userEvent.click(this.root.getByTestId('content-editor-layout__start-edit'));
    });

    // Ждём пока сработают все анимации открытия
    await new Promise((resolve) => setTimeout(resolve, 400));
  }

  async endEdit(): Promise<void> {
    await this.step('Кликаю на кнопку "Закрыть редактор"', async () => {
      await userEvent.click(this.root.getByTestId('content-editor-layout__end-edit'));
    });

    // Ждём пока сработают все анимации закрытия
    await new Promise((resolve) => setTimeout(resolve, 400));
  }

  async getContentElement(): Promise<HTMLElement | null> {
    return this.findElement('content-editor-layout__content');
  }

  async getContentSkeleton(): Promise<HTMLElement | null> {
    return this.findElement('content-editor-layout__content-skeleton');
  }

  async isEditorVisible(): Promise<boolean> {
    const editor = await this.getEditorElement();

    if (!editor) {
      return false;
    }

    return editor.getBoundingClientRect().width > 0;
  }

  async getEditorElement(): Promise<HTMLElement | null> {
    return this.findElement('content-editor-layout__content-editor');
  }

  async getEditorSkeleton(): Promise<HTMLElement | null> {
    return this.findElement('content-editor-layout__content-editor-skeleton');
  }

  async waitForContent(): Promise<void> {
    await this.root.findByTestId('content-editor-layout__content');
  }

  /**
   * Ведёт себя так же как findQuery,
   * но если элемент найти не удалось, возвращает null, а не выбрасывает ошибку
   */
  private async findElement(testId: string, timeout: number = 1000): Promise<HTMLElement | null> {
    const element = this.root.queryByTestId(testId);

    if (element || timeout <= 0) {
      return element;
    }

    await new Promise((resolve) => setTimeout(resolve, 50));
    return this.findElement(testId, timeout - 50);
  }
}
