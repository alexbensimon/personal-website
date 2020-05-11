import Link from 'next/link';
import React, { FC } from 'react';

export const Header: FC = () => (
  <>
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
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <style jsx>{`
      .root {
        text-align: center;
        margin-bottom: 50px;
      }
      .list {
        list-style-type: none;
        padding: 0;
        display: flex;
        justify-content: space-evenly;
      }
    `}</style>
  </>
);
