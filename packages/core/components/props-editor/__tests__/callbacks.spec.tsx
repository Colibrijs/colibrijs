import { describe, expect, jest, it } from '@jest/globals';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React from 'react';

import PropsEditorMeta from '../__stories__/props-editor.stories';
import { PropsEditor } from '../props-editor';

describe(PropsEditor.name, () => {
  it('вызывает callback props.onChange, когда пользователь сохраняет изменения', async () => {
    expect.assertions(1);

    const onChange = jest.fn();
    const { getByTestId } = render(<PropsEditor {...PropsEditorMeta.args} onChange={onChange} />);
    const button = getByTestId('props-editor__button');

    await userEvent.click(button);

    expect(onChange).toHaveBeenCalledWith(PropsEditorMeta.args.schema);
  });
});
