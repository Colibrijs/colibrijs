import type { Report } from './types';

export async function getReport(): Promise<Report> {
  const url = new URL(window.location.href);
  const response = await fetch(`${url.origin}${url.pathname}screenshots/report.json`);

  if (!response.ok) {
    throw new Error(`Ошибка получения данных о тестах: ${response.status}: ${response.statusText}`);
  }

  return response.json();
}
