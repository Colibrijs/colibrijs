import { within, type queries } from '@storybook/test';

type TestElement = ReturnType<typeof within<typeof queries>>;

interface Options {
  rootElement: HTMLElement;
  /** @default 'page-title' */
  testId?: string;
}

export class PageTitleTO {
  private readonly rootElement: HTMLElement;
  private _root: null | TestElement = null;
  private readonly testId: string;

  constructor(options: Options) {
    this.rootElement = options.rootElement;
    this.testId = options.testId ?? 'page-title';
  }

  private get root(): TestElement {
    if (this._root) return this._root;

    const story = within(this.rootElement);
    this._root = within(story.getByTestId(this.testId));
    return this._root;
  }

  getName(): HTMLElement {
    return this.root.getByTestId('page-title__name');
  }

  getRoute(): HTMLElement {
    return this.root.getByTestId('page-title__route');
  }
}
