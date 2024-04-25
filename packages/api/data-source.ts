import 'dotenv/config';
import path from 'node:path';
import { DataSource } from 'typeorm';

import { CreateComponents1714044117643 } from './migrations/1714044117643-create-components';
import { ComponentDTO } from './modules/components';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: path.resolve(process.cwd(), './database/database.sql'),
  entities: [ComponentDTO],
  migrations: [CreateComponents1714044117643],
  synchronize: false,
});
