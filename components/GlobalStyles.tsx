import React, { FC } from 'react';
import { colors } from '../utils/colors';

export const GlobalStyles: FC = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Alegreya+SC&family=Lato&display=swap');
    body {
      font-family: 'Lato', sans-serif;
      line-height: 1.5;
      font-size: large;
    }
    h1 {
      font-family: 'Alegreya SC', serif;
    }
    a {
      color: black;
    }
    @media (hover: hover) {
      a:hover {
        color: ${colors.red};
      }
    }
  `}</style>
);
