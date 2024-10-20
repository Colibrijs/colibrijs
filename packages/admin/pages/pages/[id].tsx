import { apiClient, NotFoundError } from '@colibrijs/api-client';
import { ContentEditor, Layout, type PageTitleProps } from '@colibrijs/core';
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<PageTitleProps>> {
  try {
    const pageId = context.params?.id;

    if (typeof pageId !== 'string') {
      return { notFound: true };
    }

    const page = await apiClient.pages.getById(pageId);

    return {
      props: { page },
    };
  } catch (error) {
    if (error instanceof NotFoundError) {
      return {
        notFound: true,
      };
    }

    throw error;
  }
}

export default function PagePage({ page }: PageTitleProps) {
  return (
    <Layout>
      <ContentEditor page={page} />
    </Layout>
  );
}
