import {
  type queries,
  screen,
  userEvent,
  within,
  waitForElementToBeRemoved,
} from '@storybook/test';

type StepImplementation = () => void | Promise<void>;
type StepFn = (text: string, fn: StepImplementation) => void | Promise<void>;
type TestElement = ReturnType<typeof within<typeof queries>>;

interface ComponentOptionData {
  text: string;
  value: string;
}

interface Options {
  canvasElement: HTMLElement;
  step: StepFn;
  /** @default 'element-add' */
  testId?: string;
}

export class ElementAddTO {
  private readonly step: StepFn;
  private readonly testId: string;
  private _root: null | TestElement = null;

  constructor(options: Options) {
    this.step = options.step;
    this.testId = options.testId ?? 'element-add';
  }

  private get root(): TestElement {
    if (this._root) return this._root;

    // screen - потому что имеем дело с модалкой, которая в портале рендерится
    this._root = within(screen.getByTestId(this.testId));
    return this._root;
  }

  private get select(): HTMLElement {
    return this.root.getByTestId('element-add__select');
  }

  /**
   * Возвращает true, если добавление элемента отображается и false если не отображается
   * @param timeout - время которое будем ждать возможного появления
   */
  isVisible(timeout = 1000): boolean {
    const element = screen.queryByTestId(this.testId);

    if (element) {
      return true;
    }

    if (timeout <= 0) {
      return false;
    }

    return this.isVisible(timeout - 50);
  }

  getDialogElement(): HTMLElement {
    return this.root.getByRole('dialog');
  }

  /** Кликнуть на выбор компонента */
  async clickOnComponentsSelect(): Promise<void> {
    await this.step('Кликаю на select с выбором компонента', async () => {
      const input = within(this.select).getByRole('combobox');
      await userEvent.click(input);
      // Вот только таким костыльным способом можно открыть селект
      await userEvent.keyboard('[Space]');
    });
  }

  /** Возвращает опции селекта с выбором компонентов */
  async getComponentsOptions(): Promise<ComponentOptionData[]> {
    const optionsElements = await screen.findAllByTestId('component-option');

    return optionsElements.map((option) => ({
      text: option.textContent!,
      value: option.getAttribute('data-value')!,
    }));
  }

  /** Возвращает id выбранного компонента. Если ничего не выбрано, возвращает null */
  getSelectedComponentId(): string | null {
    const rawValue = this.select.getAttribute('data-value');
    return rawValue === 'null' ? null : rawValue;
  }

  /** Выбирает option с указанным value */
  async selectComponent(componentId: string): Promise<void> {
    await this.clickOnComponentsSelect();
    await this.step(`Выбираю компонент с id "${componentId}"`, async () => {
      const optionsElements = await screen.findAllByTestId('component-option');
      const option = optionsElements.find(
        (option) => option.getAttribute('data-value') === componentId
      );

      if (!option) {
        throw new Error(`Не существует опшина с значением ${componentId}`);
      }

      await userEvent.click(option);
    });
  }

  /** Ожидает загрузки компонентов */
  async waitForComponentsLoading(): Promise<void> {
    await this.step('Ожидаю загрузки компонентов', async () => {
      const maybeLoadingIcon = this.select.querySelector('[role="img"][aria-label="loading"]');
      waitForElementToBeRemoved(maybeLoadingIcon, { timeout: 5000 });
    });
  }

  /** Возвращает элемент с превью пропсов */
  async findPropsElement(): Promise<HTMLElement> {
    return this.root.findByTestId('element-add__props');
  }

  /** Кликает по кнопке добавить */
  async clickAdd(): Promise<void> {
    await this.step('Кликаю по кнопке "Добавить"', async () => {
      await userEvent.click(this.root.getByTestId('element-add__submit'));
    });
  }

  /** Кликает по кнопке закрытия модалки с добавлением */
  async clickClose(): Promise<void> {
    await this.step('Кликаю по кнопке с крестиком, закрывающим модалку', async () => {
      const closeButton = this.root.getByRole('button', { name: 'Close' });
      await userEvent.click(closeButton);
    });
  }
}
