import { examplePageConstructorOptions } from '@colibrijs/mocks/pages';
import type { IPageConstructorOptions } from '@colibrijs/types';
import { userEvent, type queries, within } from '@storybook/test';

type StepImplementation = () => void | Promise<void>;
type StepFn = (text: string, fn: StepImplementation) => void | Promise<void>;
type TestElement = ReturnType<typeof within<typeof queries>>;

interface Options {
  rootElement: HTMLElement;
  step: StepFn;
  /** @default 'page-add' */
  testId?: string;
}

interface SearchElementOptions {
  /** @default true */
  strict?: boolean;
}

export class PageAddTO {
  private readonly rootElement: HTMLElement;
  private readonly step: StepFn;
  private readonly testId: string;
  private _root: null | TestElement = null;

  constructor(options: Options) {
    this.rootElement = options.rootElement;
    this.step = options.step;
    this.testId = options.testId ?? 'page-add';
  }

  private get root(): TestElement {
    if (this._root) return this._root;

    const story = within(this.rootElement);
    this._root = within(story.getByTestId(this.testId));
    return this._root;
  }

  async fillAndSubmit(options: IPageConstructorOptions = examplePageConstructorOptions) {
    await this.fillName(options.name);
    await this.fillRoute(options.route);
    await this.submit();
  }

  async fillName(text: string): Promise<void> {
    const input = this.root.getByTestId('page-add__name-input');

    await this.step(`Ввожу в поле "Адрес" значение "${text}"`, () => userEvent.type(input, text));
  }

  async fillRoute(text: string): Promise<void> {
    const input = this.root.getByTestId('page-add__route-input');

    await this.step(`Ввожу в поле "Адрес" значение "${text}"`, () => userEvent.type(input, text));
  }

  async submit(): Promise<void> {
    await this.step('Кликаю на кнопку "Добавить"', async () => {
      const submit = this.root.getByTestId('page-add__submit');
      await userEvent.click(submit);
    });
  }

  getError(options: SearchElementOptions = {}): Promise<HTMLElement | null> {
    const { strict = true } = options;

    return strict
      ? this.root.findByTestId('page-add__error')
      : Promise.resolve(this.root.queryByTestId('page-add__error'));
  }

  getNameError(options: SearchElementOptions = {}): Promise<HTMLElement | null> {
    const { strict = true } = options;
    const name = within(this.root.getByTestId('page-add__name'));

    return strict ? name.findByRole('alert') : Promise.resolve(name.queryByRole('alert'));
  }

  getRouteError(options: SearchElementOptions = {}): Promise<HTMLElement | null> {
    const { strict = true } = options;
    const route = within(this.root.getByTestId('page-add__route'));

    return strict ? route.findByRole('alert') : Promise.resolve(route.queryByRole('alert'));
  }
}
