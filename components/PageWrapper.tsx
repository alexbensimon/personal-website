import React, { FC } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { Header } from './Header';

export const PageWrapper: FC = ({ children }) => (
  <>
    <div className="root">
      <GlobalStyles />
      <Header />
      {children}
    </div>
    <style jsx>{`
      .root {
        max-width: 35em;
        margin: auto;
        padding: 10px 15px;
      }
    `}</style>
  </>
);
