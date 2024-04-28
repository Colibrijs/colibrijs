import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from 'antd';
import React, { useCallback, useState } from 'react';

import { PageAddModal, type Props } from '../page-add-modal';

export type Story = StoryObj<typeof PageAddModal>;
export type PageAddModalMeta = Meta<typeof PageAddModal>;

function Wrapper({ open: defaultOpen, onClose }: Props) {
  const [open, setOpen] = useState(defaultOpen);

  const openModal = useCallback(() => setOpen(true), []);
  const closeHandler = useCallback(() => {
    setOpen(false);
    onClose();
  }, [onClose]);

  return (
    <>
      <Button onClick={openModal} type="primary">
        Открыть
      </Button>
      <PageAddModal open={open} onClose={closeHandler} />
    </>
  );
}

export default {
  component: Wrapper,
  title: 'PageAddModal',
  args: {
    open: false,
    onClose: fn(),
  },
} satisfies PageAddModalMeta;

export const Default = {};

export const Opened = {
  args: { open: true },
};
