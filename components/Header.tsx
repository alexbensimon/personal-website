import Link from 'next/link';
import React, { FC } from 'react';

export const Header: FC = () => (
  <div>
    <h1>Alexandre Bensimon</h1>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/thoughts">
            <a>Thoughts</a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);
