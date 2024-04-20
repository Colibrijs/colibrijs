# @colibrijs/wait-storybook

Утилита ждёт появления сторибука по указанной ссылке. Хорошо работает в связке с github pages. Если,
например, нужно подождать пока на github pages появится сторибук и только потом запустить тесты на
этом сторибуке, утилита подходит. Пример использования:

```yml
- name: Build storybook
  run: storybook build
  env:
    COMMIT_SHA: ${{ env.GITHUB_SHA }}
- name: Wait for storybook
  name: npx exec wait-storybook --url "https://colibrijs.github.io/colibrijs/main/storybook/"
- name: Test interactions
  run: test-storybook --url "https://colibrijs.github.io/colibrijs/main/storybook/"
```

## --commit-sha

Однако, может быть такое, что storybook по указанной ссылке уже существует и закеширован на серверах
гитхаба. Утилита учитывает это поведение и умеет реагировать на переменную окружения COMMIT_SHA:

```yml
- name: Build storybook
  run: storybook build
  env:
    COMMIT_SHA: ${{ env.GITHUB_SHA }}
- name: Wait for storybook
  name: |
    npx exec wait-storybook
      --url "https://colibrijs.github.io/colibrijs/main/storybook/"
      --commit-sha ${{ env.GITHUB_SHA }}
- name: Test interactions
  run: test-storybook --url "https://colibrijs.github.io/colibrijs/main/storybook/"
```

Если переменная с таким именем указана, утилита будет искать в сторибуке мета-тэг с именем
_commit-sha_, и атрибутом _content_ значение которого должно быть равно переменной окружения. Чтобы
добавить такой мета-тэг в storybook, используйте следующую настройку в _.storybook/main.ts_:

```ts
export default {
  // ...
  previewHead: (head) => {
    if (!process.env.COMMIT_SHA) return head;

    const commitShaMeta = `<meta name="commit-sha" content="${process.env.COMMIT_SHA}">`;
    return `${head}${commitShaMeta}`;
  },
};
```

## Другие параметры

**--ping-interval-seconds** -
Интервал в секундах через который утилита будет делать повторную попытку найти сторибук.
По умолчанию интервал равен **10 секунд**.
**--timeout-seconds** -
Таймаут в течение которого сторибук будет считаться не найденным. Если в течение указанного
времени сторибук так и не появится, утилита вернёт ошибку.
