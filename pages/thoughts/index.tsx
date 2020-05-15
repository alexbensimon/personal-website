import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default () => (
  <>
    <Head>
      <title>Thoughts | Alexandre Bensimon</title>
      <meta name="description" content="What I've been thinking about." />
    </Head>
    <div>
      <h1>Thoughts</h1>
      <ul>
        <li className="listItem">
          <Link href="/thoughts/lorem">
            <a>
              <h2 className="itemTitle">Lorem</h2>
            </a>
          </Link>
        </li>
      </ul>
    </div>
    <style jsx>{`
      .listItem {
        margin-bottom: 10px;
      }
      .itemTitle {
        display: inline;
        font-weight: normal;
        font-size: larger;
      }
    `}</style>
  </>
);
