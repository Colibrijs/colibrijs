import fs from 'node:fs';
import path from 'node:path';

import type { Report } from '../screenshot-panel/types';

export async function screenshotApprove() {
  const jsonReport = fs.readFileSync(
    path.resolve(__dirname, '../screenshots/report.json'),
    'utf-8'
  );
  const report: Report = JSON.parse(jsonReport);
  report.testResults.forEach((test) => {
    if (test.status === 'passed') return;
    if (test.name.includes('/screenshot/') || test.name.includes('\\screenshot\\')) {
      test.approved = true;
    }
  });
  fs.writeFileSync(path.resolve(__dirname, '../screenshots/report.json'), JSON.stringify(report));
}
