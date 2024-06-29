import type { StoryObj } from '@storybook/react';
import { within } from '@storybook/test';

type PlayFunctionContext = Parameters<NonNullable<StoryObj['play']>>[0];

interface Options {
  canvasElement: PlayFunctionContext['canvasElement'];
  /** @default 'content-editor-layout' */
  testId?: string;
}

export class ContentEditorLayoutTO {
  private readonly canvasElement: PlayFunctionContext['canvasElement'];
  private readonly testId: string;

  constructor(options: Options) {
    this.canvasElement = options.canvasElement;
    this.testId = options.testId ?? 'content-editor-layout';
  }

  private get root() {
    const canvas = within(this.canvasElement);
    return within(canvas.getByTestId(this.testId));
  }

  /** Возвращает элемент в котором рендерится контент */
  async getContentElement(): Promise<HTMLElement | null> {
    return this.findElement('content-editor-layout__content');
  }

  /** Возвращает элемент-скелетон контента */
  async getContentSkeleton(): Promise<HTMLElement | null> {
    return this.findElement('content-editor-layout__content-skeleton');
  }

  /** Возвращает элемент в котором рендерится редактор контента */
  async getEditorElement(): Promise<HTMLElement | null> {
    return this.findElement('content-editor-layout__content-editor');
  }

  /** Возвращает элемент в котором рендерится скелетон редактора контента */
  async getEditorSkeleton(): Promise<HTMLElement | null> {
    return this.findElement('content-editor-layout__content-editor-skeleton');
  }

  /** Возвращает элемент, который зарезолвится, когда контент загрузится */
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
