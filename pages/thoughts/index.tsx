import Link from 'next/link';
import React from 'react';

export default () => (
  <ul>
    <li>
      <Link href="/thoughts/lorem">
        <a>Lorem</a>
      </Link>
    </li>
    <style jsx>{`
      a {
        color: black;
      }
    `}</style>
  </ul>
);
