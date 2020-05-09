import React, { FC } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { Header } from './Header';

export const PageWrapper: FC = ({ children }) => (
  <div className="root">
    <GlobalStyles />
    <Header />
    {children}
    <style jsx>{`
      .root {
        width: 35em;
        margin: auto;
        padding: 20px 30px;
      }
    `}</style>
  </div>
);
