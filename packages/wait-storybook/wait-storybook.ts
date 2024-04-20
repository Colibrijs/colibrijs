import type { WaitStorybookOptions } from './types';

/** Ждёт появления сторибука на указанном адресе */
export async function waitStorybook(options: WaitStorybookOptions): Promise<void> {
  try {
    const storybookUrl = new URL(options.url);
    const iframeUrl = new URL('iframe.html', storybookUrl);
    options.logger.log(`Делаю запрос на ${iframeUrl}`);
    const response = await fetch(iframeUrl);

    if (options.commitSha) {
      const has = await checkCommitSha(response, options);
      if (!has) return repeat(options);
    }

    if (response.status === 200) {
      options.logger.log('Сторибук готов');
      return;
    }
  } catch (error) {
    if (!(error instanceof TypeError)) {
      options.logger.error('Произошла неизвестная ошибка');
      process.exit(1);
    }

    if (error.cause instanceof AggregateError) {
      const errorIsEconnrefused = error.cause.errors.some((sub) => sub?.code === 'ECONNREFUSED');

      if (!errorIsEconnrefused) {
        options.logger.error('Произошла неизвестная ошибка');
        process.exit(1);
      }
    }

    return repeat(options);
  }
}

async function repeat(options: WaitStorybookOptions): Promise<void> {
  if (options.timeout < 0) {
    options.logger.error('Время ожидания вышло! Завязываем');
    process.exit(1);
  }

  options.logger.log(`Ждём ${options.pingInterval} секунд и повторяем запрос`);
  await new Promise((resolve) => setTimeout(resolve, options.pingInterval * 1000));

  return waitStorybook({
    ...options,
    timeout: options.timeout - options.pingInterval,
  });
}

async function checkCommitSha(response: Response, options: WaitStorybookOptions): Promise<boolean> {
  const meta = `<meta name="commit-sha" content="${options.commitSha}">`;
  options.logger.log(`Всеми силами пытаюсь найти: ${meta}`);
  const body = await response.text();

  if (!body.includes(meta)) {
    options.logger.log('Эх, не нашел');
    return false;
  }

  options.logger.log('Ура! Нашел');
  return true;
}
