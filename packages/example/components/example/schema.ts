import { object, string, z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

export const exampleProps = object({
  title: string(),
  text: string().optional(),
});

export type Props = z.infer<typeof exampleProps>;

export const schema = JSON.stringify(zodToJsonSchema(exampleProps), null, 2);
