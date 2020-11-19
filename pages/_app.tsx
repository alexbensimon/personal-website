import { AppProps } from 'next/app';
import React from 'react';
import { PageWrapper } from '../components/PageWrapper';

const App = ({ Component, pageProps }: AppProps) => (
  <PageWrapper>
    <Component {...pageProps} />
  </PageWrapper>
);

export default App;
