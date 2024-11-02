#!/usr/bin/env node

// eslint-disable-next-line @typescript-eslint/no-var-requires -- всё хорошо
require('ts-node').register({
  transpileOnly: true,
  compilerOptions: {
    module: 'CommonJS',
    moduleResolution: 'node',
  },
});

require('../cli.ts');
