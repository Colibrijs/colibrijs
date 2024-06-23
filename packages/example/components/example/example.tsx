import styles from './example.css';
import type { Props } from './schema';

export function Example({ title, text }: Props) {
  return (
    <article data-testid="example" className={styles.root}>
      <h1 data-testid="example__title" className={styles.title}>
        {title}
      </h1>
      {Boolean(text) && (
        <p data-testid="example__text" className={styles.text}>
          {text}
        </p>
      )}
    </article>
  );
}

Example.displayName = 'Example';
