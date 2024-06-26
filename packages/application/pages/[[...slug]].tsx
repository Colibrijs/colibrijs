import { apiClient } from '@colibrijs/api-client';
import { Content } from '@colibrijs/core';
import type { IElement } from '@colibrijs/types';
import type { GetServerSidePropsResult, GetServerSidePropsContext } from 'next';

interface PageProps {
  content: IElement[];
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<PageProps>> {
  const content = await apiClient.elements.get(context.resolvedUrl);

  return {
    props: { content },
  };
}

export default function Page({ content }: PageProps) {
  return <Content content={content} />;
}
