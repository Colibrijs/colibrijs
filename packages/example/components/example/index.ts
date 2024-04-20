import type { JsonSchema, MicrofrontendMeta } from '@colibrijs/types';
import { zodToJsonSchema } from 'zod-to-json-schema';

import { Example } from './example';
import { exampleProps, type Props } from './example.schema';

export default {
  component: Example,
  name: Example.displayName,
  schema: zodToJsonSchema(exampleProps) as JsonSchema<Props>,
} satisfies MicrofrontendMeta<Props>;

export type { Props as ExampleProps };
