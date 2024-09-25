import React, { useEffect } from 'react';
import { loadGoogleAnalytics } from '../utils/googleAnalytics';
import { GlobalStyles } from './GlobalStyles';
import { Header } from './Header';

export const PageWrapper = ({ children }) => {
  useEffect(() => {
    loadGoogleAnalytics();
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
