import { Command } from 'commander';

interface Options {
  author: string;
  reviewer: string;
}

const controlFreak = new Command();

controlFreak
  .command('request-review')
  .requiredOption('--author <string>', 'Имя автора пулл реквеста')
  .requiredOption('--reviewer <string>', 'Имя ревьюера пулл реквеста')
  .action((options: Options) => {
    // eslint-disable-next-line no-console -- для эксперимента надо
    console.log(`${options.author} запрашивает ревью у ${options.reviewer}`);
  });

controlFreak
  .command('response-review')
  .requiredOption('--author <string>', 'Имя автора пулл реквеста')
  .requiredOption('--reviewer <string>', 'Имя ревьюера пулл реквеста')
  .action((options: Options) => {
    // eslint-disable-next-line no-console -- для эксперимента надо
    console.log(`${options.reviewer} поревьюил пулл реквест от ${options.author}`);
  });

controlFreak.parse();
