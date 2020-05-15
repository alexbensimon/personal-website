import React, { FC, useEffect } from 'react';
import { loadGoogleAnalytics } from '../utils/loadGoogleAnalytics';
import { GlobalStyles } from './GlobalStyles';
import { Header } from './Header';

export const PageWrapper: FC = ({ children }) => {
  useEffect(() => {
    loadGoogleAnalytics();
  }, []);

  return (
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
};
