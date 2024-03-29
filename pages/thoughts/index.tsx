import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Index = () => (
  <>
    <Head>
      <title>Thoughts | Alexandre Bensimon</title>
      <meta name="description" content="What I've been thinking about." />
    </Head>
    <div>
      <h1>Thoughts</h1>
      <ul>
        <li className="listItem">
          <Link href="/thoughts/quantifiedself">
            <a>
              <h2 className="itemTitle">Quantified Self</h2>
            </a>
          </Link>
        </li>
        <li className="listItem">
          <Link href="/thoughts/microincentives">
            <a>
              <h2 className="itemTitle">Micro-incentives</h2>
            </a>
          </Link>
        </li>
        <li className="listItem">
          <Link href="/thoughts/indistractable">
            <a>
              <h2 className="itemTitle">Indistractable</h2>
            </a>
          </Link>
        </li>
        <li className="listItem">
          <Link href="/thoughts/country">
            <a>
              <h2 className="itemTitle">Country</h2>
            </a>
          </Link>
        </li>
        <li className="listItem">
          <Link href="/thoughts/art">
            <a>
              <h2 className="itemTitle">Art</h2>
            </a>
          </Link>
        </li>
        <li className="listItem">
          <Link href="/thoughts/guidelines">
            <a>
              <h2 className="itemTitle">Guidelines</h2>
            </a>
          </Link>
        </li>
        <li className="listItem">
          <Link href="/thoughts/writing">
            <a>
              <h2 className="itemTitle">Writing</h2>
            </a>
          </Link>
        </li>
        <li className="listItem">
          <Link href="/thoughts/games">
            <a>
              <h2 className="itemTitle">Games</h2>
            </a>
          </Link>
        </li>
        <li className="listItem">
          <Link href="/thoughts/abstractions">
            <a>
              <h2 className="itemTitle">Abstractions</h2>
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

export default Index;
