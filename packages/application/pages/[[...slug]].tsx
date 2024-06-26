import { apiClient } from '@colibrijs/api-client';
import { Content } from '@colibrijs/core';
import type { IElement } from '@colibrijs/types';
import type { GetServerSidePropsResult } from 'next';

interface PageProps {
  content: IElement[];
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<PageProps>> {
  const content = await apiClient.elements.get();

  return {
    props: { content },
  };
}

export default function Page({ content }: PageProps) {
  return <Content content={content} />;
}
