import type { ReportData } from './types';

type ErrorData = {
  message: string;
};

export async function getReportData() {
  const url = new URL(window.location.href);
  const response = await fetch(`${url.origin}${url.pathname}screenshots/report.json`);

  if (!response.ok) {
    throw new Error(`Ошибка получения данных о тестах: ${response.status}: ${response.statusText}`);
  }

  const responseData: ReportData & ErrorData = await response.json();
  return responseData;
}
