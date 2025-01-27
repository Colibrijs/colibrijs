# @colibrijs/sauron-eye-addon

Аддон для скриншотных тестов в сторибуке.

## Установка

```bash
npm i -D @colibrijs/sauron-eye-addon
```

## Подключение в сторибук

Чтобы подключить аддон в сторибук, нужно:

1. Добавить его в список аддонов в файле _.storybook/main.ts_:

```ts
import type { StorybookConfig } from '@storybook/react-webpack5';

export default {
  // ... настройки
  addons: [
    // ... другие аддоны
    '@colibrijs/sauron-eye-addon',
    {
      name: '@storybook/addon-styling',
      options: {
        cssModules: {
          localIdentName: '[path][name]__[local]',
        },
      },
    },
  ],
  // ....
} satisfies StorybookConfig;
```

2. Аддон работает с API гитхаба, должен куда-то складывать скриншоты и должен знать ссылки
   сторибуков, чтобы что-то с чем-то сравнивать. Он понадобится в нескольких местах, поэтому лучше
   сделать файл с конфигурацией в файле _.storybook/sauron-eye-config.ts_ со следующим содержимым:

```ts
import type { SauronEyeConfig } from '@colibrijs/sauron-eye-addon';

export const sauronEyeConfig: SauronEyeConfig = {
  // нужно чтобы запускать джобу, которая апрувит изменения
  githubToken: process.env.GH_TOKEN!,
  // номер пулл-реквеста к которому нужно оставить комментарий
  pullRequestNumber: process.env.PULL_REQUEST_NUMBER!,
  // группа параметров так же для апрува изменений
  repositoryOwner: process.env.REPOSITORY_OWNER!,
  repositoryName: process.env.REPOSITORY_NAME!,
  // Эталонный сторибук с которым будет сравниваться текущий
  referenceStorybookUrl: process.env.REFERENCE_STORYBOOK_URL || 'http://localhost:6006/',
  // Текущий сторибук
  testingStorybookUrl: process.env.TESTING_STORYBOOK_URL || 'http://localhost:6006/',
};
```

Здесь значения берутся из переменных окружения, можно использовать другие варианты. В дальнейшем
повестсовании, автор будет исходить из того что настройки задаются через переменные окружения.

3. Далее, нужно указать этот конфиг в _.storybook/preview.ts_:

```ts
import type { Preview } from '@storybook/react';

import { sauronEyeConfig } from './sauron-eye-config';

export default {
  // ... прочие настройки Preview
  globals: {
    sauronEye: sauronEyeConfig,
  },
} satisfies Preview;
```

4. Помимо прочего, нужно настроить
   [тест-раннер сторибука](https://storybook.js.org/docs/writing-tests/test-runner). Если настроек для
   него ещё нет, нужно добавить файл _.storybook/test-runner.ts_:

```ts
import { getScreenshoterConfig } from '@colibrijs/sauron-eye-addon/test-runner-config';
import { sauronEyeConfig } from './sauron-eye-config';

export default getScreenshoterConfig(sauronEyeConfig);
```

Если настройки уже есть, действуйте по ситуации.

## Настройка CI

### Добыча токена для работы с гитхабом

Обычный гитхаб-токен не подходит для работы с ручным запуском джоб, тут нужен персональный. Создать
его можно в [настройках профиля](https://github.com/settings/tokens):

1. Generate new token
2. Generate new token (Classic)
3. Отмечаем только workflow
4. Generate token
5. То что получится, нужно прогнать через функцию и сохранить в секреты репозитория:

```js
'token'
  .split('')
  .map((symbol) => symbol.charCodeAt())
  .join(',');
```

### Настройка тестов

Выше, автор исходит из того что настройки для аддона задаются через переменные окружения. Из-за
этого, в CI нужно действовать по ситуации. Есть два варианта того как может происходить со
сторибуком.

#### Вариант первый (распространённый, сложнее)

Сторибук собирается в одной джобе, а тесты прогоняются в другой. Из-за того что настройки берутся
из переменных окружения, эти самые переменные окружения нужно будет указать два раза. Первый раз
при сборке сторибука, второй раз при прогоне тестов:

```yaml
jobs:
  build:
    # ...
    steps:
      # ...
      - name: Build storybook
        run: npm run storybook build
        env:
          BRANCH_NAME: 'main' # Тут значения захардкожены, нужно получать самостоятельно
          GH_TOKEN: ${{ secrets.GH_TOKEN }} # О том где его взять, описано выше
          PULL_REQUEST_NUMBER: ${{ github.event_name == 'pull_request' && github.event.number || '' }}
          REPOSITORY_OWNER: ${{ github.repository_owner }}
          REPOSITORY_NAME: ${{ github.event.repository.name }}
          # Ссылка может отличаться. Всё зависит от того как деплоится сторибук
          REFERENCE_STORYBOOK_URL: https://${{ github.repository_owner }}.github.io/${{ github.event.repository.name }}/main/storybook/
          # Ссылка может отличаться. Всё зависит от того как деплоится сторибук
          TESTING_STORYBOOK_URL: https://${{ github.repository_owner }}.github.io/${{ github.event.repository.name }}/${{ steps.metadata.outputs.branch }}/storybook/
      - name: Save storybook build
        uses: actions/upload-artifact@v4
        with:
          name: storybook
          path: |
            ./packages/core/storybook-static
            ./packages/core/screenshots

  test:
    # ...
    needs:
      - build
    runs-on: ubuntu-latest
    container:
      image: mcr.microsoft.com/playwright:v1.44.1-jammy
    steps:
      - name: Download storybook
        uses: actions/download-artifact@v4
        with:
          name: ${{ needs.build.outputs.storybook-artifact-name }}
          path: ./packages/core
      - name: Serve Storybook and run tests
        id: run_test
        continue-on-error: true
        env:
          # Для ветки main - https://colibrijs.github.io/colibrijs/main/example/
          BRANCH_NAME: ${{ steps.metadata.outputs.branch }}
          GH_TOKEN: ${{ secrets.GH_TOKEN }}
          PULL_REQUEST_NUMBER: ${{ github.event_name == 'pull_request' && github.event.number || '' }}
          REPOSITORY_OWNER: ${{ github.repository_owner }}
          REPOSITORY_NAME: ${{ github.event.repository.name }}
          REFERENCE_STORYBOOK_URL: https://${{ github.repository_owner }}.github.io/${{ github.event.repository.name }}/main/storybook/
          TESTING_STORYBOOK_URL: https://${{ github.repository_owner }}.github.io/${{ github.event.repository.name }}/${{ steps.metadata.outputs.branch }}/storybook/
          EXAMPLE_URL: https://${{ github.repository_owner }}.github.io/${{ github.event.repository.name }}/${{ steps.metadata.outputs.branch }}/example/
          COMMIT_SHA: ${{ github.sha }} # https://docs.github.com/en/actions/learn-github-actions/contexts#github-context
        run: |
          npx concurrently -k -s first -n "SB,TEST" -c "magenta,blue" \
          "npm run storybook:serve -w @colibrijs/core" \
          "npm run test:interactions -w @colibrijs/core"
      - name: Move screenshots to storybook-build
        run: |
          cp -r ./packages/core/screenshots ./packages/core/storybook-static
          cd ./packages/core/storybook-static
          ls -la
          cd ../../../
      - name: Save storybook build
        uses: actions/upload-artifact@v4
        with:
          name: storybook
          path: ./packages/core/storybook-static
          overwrite: true
      - name: Check previous status
        if: steps.run_test.outcome != 'success'
        run: |
          echo "Ошибка: видимо упали тесты! Проверь в шаге 'Serve Storybook and run tests'"
          exit 1
```

Обрати внимание что скриншоты перемещаются в папку с собранным сторибуком. Это нужно чтобы сторибук
задеплоился со скриншотами. Так можно будет посмотреть как выглядел сторис ранее и как сейчас. Если
скриншоты не сохранить, ничего не видно будет.

#### Вариант второй (редкий, простой)

Такой же как первый, только без джобы build

### Настройка апрувов

Чтобы апрувы изменений заработали, нужно добавить новый workflow в _.github/workflows/screenshot-approve.yml_.
Файлик должен называться именно так, а то не заработает:

```yaml
on:
  workflow_dispatch:
    inputs:
      pull-request-number:
        type: string
        required: true
        description: Номер пулл-реквеста
      approved-screenshots:
        type: string
        required: true

jobs:
  screenshot-approve:
    runs-on: ubuntu-latest
    concurrency:
      group: screenshot-approve
    permissions:
      pull-requests: write
    steps:
      - name: Comment PR
        uses: thollander/actions-comment-pull-request@v3
        with:
          message: |
            <details>
              <summary>Подтверждаю изменения в скриншотах</summary>
              <pre id="screenshots-data">${{ inputs.approved-screenshots }}</pre>
            </details>
          comment-tag: screenshot-approve
          mode: upsert
          pr-number: ${{ inputs.pull-request-number }}
```
