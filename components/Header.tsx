import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

export const Header: FC = () => {
  const { pathname } = useRouter();
  return (
    <>
      <div className="root">
        {pathname === '/' ? (
          <h1 className="titleOnRoot">Alexandre Bensimon</h1>
        ) : (
          <span>Alexandre Bensimon</span>
        )}
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
          min-width: 250px;
        }
        .titleOnRoot {
          margin: 0;
          font-family: 'Lato', sans-serif;
          font-size: large;
          font-weight: normal;
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
};
