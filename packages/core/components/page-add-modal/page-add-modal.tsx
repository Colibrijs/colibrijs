import { Modal } from 'antd';
import React from 'react';

import { PageAdd } from '../page-add';

export interface Props {
  open: boolean;
  onClose: () => void;
}

export function PageAddModal({ open, onClose }: Props) {
  return (
    <Modal
      footer={null}
      open={open}
      title="Добавление страницы"
      onCancel={onClose}
      data-testid="page-add-modal"
    >
      <div data-testid="page-add-modal__content">
        <PageAdd onReady={onClose} />
      </div>
    </Modal>
  );
}
