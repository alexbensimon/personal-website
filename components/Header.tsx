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
            <li className="listItem">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="listItem">
              <Link href="/thoughts">
                <a>Thoughts</a>
              </Link>
            </li>
            <li className="listItem">
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </li>
            <li className="listItem">
              <a
                href="https://tinyletter.com/alexbensimon"
                target="_blank"
                rel="noopener noreferrer"
              >
                News
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>{`
        .root {
          text-align: center;
          margin-bottom: 50px;
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
          flex-wrap: wrap;
        }
        .listItem {
          padding: 0 10px 0;
        }
      `}</style>
    </>
  );
};
