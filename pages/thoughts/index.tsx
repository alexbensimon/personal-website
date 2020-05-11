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
      <ul>
        <li>
          <Link href="/thoughts/lorem">
            <a>Lorem</a>
          </Link>
        </li>
      </ul>
    </div>
  </>
);
