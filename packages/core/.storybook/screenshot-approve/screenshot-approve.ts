import fs from 'node:fs';
import path from 'node:path';

import type { ReportData } from '../screenshot-panel/types';

export async function screenshotApprove() {
  const jsonData = fs.readFileSync(path.resolve(__dirname, '../screenshots/report.json'), 'utf-8');
  const parsedData: ReportData = JSON.parse(jsonData);
  parsedData.testResults.forEach((test) => {
    if (test.status === 'passed') return;
    if (test.name.includes('/screenshot/') || test.name.includes('\\screenshot\\')) {
      test.approved = true;
    }
  });
  fs.writeFileSync(
    path.resolve(__dirname, '../screenshots/report.json'),
    JSON.stringify(parsedData)
  );
}
