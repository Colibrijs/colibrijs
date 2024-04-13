import React, { type FC } from 'react';

import styles from './props-editor.css';

export interface Props {
  schema: Record<string, string>;
}

export const PropsEditor: FC<Props> = ({ schema }) => {
  return (
    <label className={styles.editor}>
      <span className={styles.label} data-testid="editor__label">
        Props:
      </span>
      <textarea
        className={styles.textarea}
        defaultValue={JSON.stringify(schema, null, 2)}
        rows={4}
      />
    </label>
  );
};
