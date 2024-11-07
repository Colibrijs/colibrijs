import type { Report } from './types';

export async function getReport() {
  const url = new URL(window.location.href);
  const response = await fetch(`${url.origin}${url.pathname}screenshots/report.json`);

  if (!response.ok) {
    throw new Error(`Ошибка получения данных о тестах: ${response.status}: ${response.statusText}`);
  }

  const responseData: Report = await response.json();
  return responseData;
}
