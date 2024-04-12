import React, { type FC } from 'react';

export interface Props {
  schema: Record<string, string>;
}

export const PropsEditor: FC<Props> = ({ schema }) => {
  return (
    <label>
      <span>Props:</span>
      <textarea defaultValue={JSON.stringify(schema, null, 2)} />
    </label>
  );
};
