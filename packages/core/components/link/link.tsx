import { Typography } from 'antd';
import React, { useCallback } from 'react';
import type { AnchorHTMLAttributes, MouseEvent, PropsWithChildren } from 'react';

import { useRouter } from '../../hooks/use-router';

type LinkAttributes = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'rel' | 'target'>;

export type Props = PropsWithChildren<
  {
    href: string;
    type?: 'secondary';
  } & LinkAttributes
>;

export function Link({ children, href, ...attributes }: Props) {
  const router = useRouter();

  const clickHandler = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (attributes.target !== '_blank') {
        event.preventDefault();
      }

      router.push(href);
    },
    [attributes, href, router]
  );

  return (
    <Typography.Link {...attributes} href={href} onClick={clickHandler}>
      {children}
    </Typography.Link>
  );
}
