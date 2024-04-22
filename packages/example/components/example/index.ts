import type { JsonSchema } from '@colibrijs/types';
import { zodToJsonSchema } from 'zod-to-json-schema';

import { exampleProps, type Props } from './example.schema';

export { Example as default } from './example';

export const schema = JSON.stringify(zodToJsonSchema(exampleProps), null, 2) as JsonSchema<Props>;

export type { Props as ExampleProps };
