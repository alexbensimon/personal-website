import { AppProps } from 'next/app';
import React from 'react';
import { PageWrapper } from '../components/PageWrapper';

export default ({ Component, pageProps }: AppProps) => (
  <PageWrapper>
    <Component {...pageProps} />
  </PageWrapper>
);
