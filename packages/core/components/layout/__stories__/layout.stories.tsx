import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from 'antd';
import React from 'react';

import { Layout } from '../layout';

type Story = StoryObj<typeof Layout>;

export default {
  component: Layout,
  title: 'Layout',
  args: {
    children: <Typography.Text>Некий контент</Typography.Text>,
  },
} satisfies Meta<typeof Layout>;

export const Default: Story = {};

export const Sidebar: Story = {
  args: {
    sidebar: <Typography.Text>Сайдбар</Typography.Text>,
  },
};
