import { object, string, z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

export const textProps = object({ text: string() });

export type Props = z.infer<typeof textProps>;

export const schema = JSON.stringify(zodToJsonSchema(textProps), null, 2);
