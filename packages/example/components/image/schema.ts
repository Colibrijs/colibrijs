import { object, string, z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

export const imageProps = object({
  alt: string(),
  src: string(),
});

export type Props = z.infer<typeof imageProps>;

export const schema = JSON.stringify(zodToJsonSchema(imageProps), null, 2);
