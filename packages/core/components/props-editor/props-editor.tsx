import React, { type FC } from 'react';

import styles from './props-editor.css';

export interface Props {
  schema: Record<string, string>;
}

export const PropsEditor: FC<Props> = ({ schema }) => {
  return (
    <label className={styles.root}>
      <span>Props:</span>
      <textarea defaultValue={JSON.stringify(schema, null, 2)} />
    </label>
  );
};
