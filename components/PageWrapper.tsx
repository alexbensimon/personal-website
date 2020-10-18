import React, { FC, useEffect } from 'react';
import { loadGoogleAnalytics } from '../utils/googleAnalytics';
import { loadOmnisend } from '../utils/omnisend';
import { GlobalStyles } from './GlobalStyles';
import { Header } from './Header';

export const PageWrapper: FC = ({ children }) => {
  useEffect(() => {
    loadGoogleAnalytics();
    loadOmnisend();
  }, []);

  return (
    <>
      <GlobalStyles />
      <div className="root">
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
};
