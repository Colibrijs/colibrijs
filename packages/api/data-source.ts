import 'dotenv/config';
import path from 'node:path';
import { DataSource } from 'typeorm';

import { migrations } from './migrations';
import { ComponentDTO } from './modules/components';
import { PageDTO } from './modules/pages';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: path.resolve(process.cwd(), './database/database.sql'),
  entities: [ComponentDTO, PageDTO],
  migrations,
  synchronize: false,
});
