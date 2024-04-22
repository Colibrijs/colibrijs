import { object, string, z } from 'zod';

export const exampleProps = object({
  title: string(),
  text: string().optional(),
});

export type Props = z.infer<typeof exampleProps>;
