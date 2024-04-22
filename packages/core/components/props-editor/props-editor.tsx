import React, { useCallback } from 'react';

import styles from './props-editor.css';

export interface Props {
  schema: Record<string, string>;
  onChange: (schema: Record<string, string>) => void;
}

export function PropsEditor({ schema, onChange }: Props) {
  const saveHandler = useCallback(() => {
    onChange(schema);
  }, [onChange, schema]);

  return (
    <label className={styles.editor}>
      <span className={styles.label} data-testid="props-editor__label">
        Props:
      </span>
      <textarea
        className={styles.textarea}
        defaultValue={JSON.stringify(schema, null, 2)}
        rows={4}
      />
      <button type="button" onClick={saveHandler} data-testid="props-editor__button">
        Save
      </button>
    </label>
  );
}
