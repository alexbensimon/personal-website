import React, { FC } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { Header } from './Header';

export const PageWrapper: FC = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    {children}
  </>
);
