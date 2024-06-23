import type { Props } from './schema';

export function Image({ alt, src }: Props) {
  return <img src={src} alt={alt} data-testid="image" />;
}
