import Head from 'next/head';
import React from 'react';

const Index = () => (
  <>
    <Head>
      <title>Projects | Alexandre Bensimon</title>
      <meta name="description" content="Projects I've been working on." />
    </Head>
    <div>
      <h1>Projects</h1>
      <ul>
        <li className="listItem">
          <a
            href="https://replit.com/@alexbensimon/DiscorDynamic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="itemTitle">Discord bot on Replit</h2>
          </a>
        </li>
        <li className="listItem">
          <a
            href="https://github.com/alexbensimon/advent-of-code-2020"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="itemTitle">AoC 2020 in Rust</h2>
          </a>
        </li>
        <li className="listItem">
          <a
            href="https://github.com/alexbensimon/personal-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="itemTitle">This website</h2>
          </a>
        </li>
        <li className="listItem">
          <a
            href="https://github.com/alexbensimon/maman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="itemTitle">Mom's website</h2>
          </a>
        </li>
        <li className="listItem">
          <a
            href="https://github.com/alexbensimon/qure"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="itemTitle">Qure</h2>
          </a>
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
