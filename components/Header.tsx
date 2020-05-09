import Link from 'next/link';
import React, { FC } from 'react';

export const Header: FC = () => (
  <div className="root">
    <span>Alexandre Bensimon</span>
    <nav>
      <ul className="list">
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
        <li>
          <Link href="/">
            <a>Projects</a>
          </Link>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      .root {
        text-align: center;
      }
      .list {
        list-style-type: none;
        padding: 0;
        display: flex;
        justify-content: space-evenly;
      }
      a {
        color: black;
      }
    `}</style>
  </div>
);
