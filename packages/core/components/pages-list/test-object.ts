import { userEvent, within, type queries } from '@storybook/test';

type StepImplementation = () => void | Promise<void>;
type StepFn = (text: string, fn: StepImplementation) => void | Promise<void>;
type TestElement = ReturnType<typeof within<typeof queries>>;

interface Options {
  rootElement: HTMLElement;
  step: StepFn;
  /** @default 'pages-list' */
  testId?: string;
}

export class PagesListTO {
  private readonly rootElement: HTMLElement;
  private readonly step: StepFn;
  private readonly testId: string;
  private _root: null | TestElement = null;

  constructor(options: Options) {
    this.rootElement = options.rootElement;
    this.step = options.step;
    this.testId = options.testId ?? 'pages-list';
  }

  private get root(): TestElement {
    if (this._root) return this._root;

    const story = within(this.rootElement);
    this._root = within(story.getByTestId(this.testId));
    return this._root;
  }

  async clickAdd() {
    await this.step('Кликаю на кнопку добавления страницы', async () => {
      const add = this.root.getByTestId('pages-list__add');
      await userEvent.click(add);
    });
  }

  findTitleElement(pageId: string): Promise<HTMLElement> {
    return this.root.findByTestId(`pages-list__${pageId}`);
  }
}
