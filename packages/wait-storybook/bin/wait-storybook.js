#!/usr/bin/env node

// этот код выполняется в commonjs окружении. Здесь не получится использовать импорты
// eslint-disable-next-line @typescript-eslint/no-var-requires -- выше описал
require('ts-node').register({
  transpileOnly: true,
  compilerOptions: {
    module: 'CommonJS',
    moduleResolution: 'node',
  },
});

require('../cli.ts');
