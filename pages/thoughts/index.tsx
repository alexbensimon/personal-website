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
            <h2 className="itemTitle">Quantified Self</h2>
          </Link>
        </li>
        <li className="listItem">
          <Link href="/thoughts/microincentives">
            <h2 className="itemTitle">Micro-incentives</h2>
          </Link>
        </li>
        <li className="listItem">
          <Link href="/thoughts/indistractable">
            <h2 className="itemTitle">Indistractable</h2>
          </Link>
        </li>
        <li className="listItem">
          <Link href="/thoughts/country">
            <h2 className="itemTitle">Country</h2>
          </Link>
        </li>
        <li className="listItem">
          <Link href="/thoughts/art">
            <h2 className="itemTitle">Art</h2>
          </Link>
        </li>
        <li className="listItem">
          <Link href="/thoughts/guidelines">
            <h2 className="itemTitle">Guidelines</h2>
          </Link>
        </li>
        <li className="listItem">
          <Link href="/thoughts/writing">
            <h2 className="itemTitle">Writing</h2>
          </Link>
        </li>
        <li className="listItem">
          <Link href="/thoughts/games">
            <h2 className="itemTitle">Games</h2>
          </Link>
        </li>
        <li className="listItem">
          <Link href="/thoughts/abstractions">
            <h2 className="itemTitle">Abstractions</h2>
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
