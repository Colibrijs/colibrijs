import { Command } from 'commander';

import { screenshotApprove } from './screenshot-approve';

const commander = new Command();

commander.command('screenshot-approve').action(screenshotApprove);

commander.parse();
