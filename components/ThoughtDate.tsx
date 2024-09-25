import React from 'react';
import { colors } from '../utils/colors';

export const ThoughtDate = ({ children }) => (
  <>
    <span className="date">{children}</span>
    <style jsx>{`
      .date {
        display: block;
        margin: -20px 0 30px;
        font-size: small;
        color: ${colors.gray};
      }
    `}</style>
  </>
);
