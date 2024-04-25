# @colibrijs/api

## Миграции

Можно использовать любые инструменты для миграций, которые
[предоставляет typeorm](https://typeorm.io/migrations). Так же, есть набор заранее заготовленных
npm-скриптов для работы с миграциями:

### Команды

- **migration:create** _&lt;path&gt;_ - создаёт новую пустую миграцию
- **migration:generate** _./src/migrations/transaction-name_ - генерирует миграцию из исходников
- **migrations:run** - запускает миграции
- **migrations:revert** - откатывает миграции
