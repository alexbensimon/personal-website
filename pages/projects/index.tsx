import Head from 'next/head';
import React from 'react';
import { ExternalLink } from '../../components/ExternalLink';

const Index = () => (
  <>
    <Head>
      <title>Projects | Alexandre Bensimon</title>
      <meta name="description" content="Projects I've been working on." />
    </Head>
    <div>
      <h1>Projects</h1>
      <h2>Apps</h2>
      <ul>
        <li className="listItem">
          <ExternalLink href="https://pakt.me/">
            <h2 className="itemTitle">Pakt</h2>
          </ExternalLink>
        </li>

        <li className="listItem">
          <ExternalLink href="https://github.com/alexbensimon/qure">
            <h2 className="itemTitle">Qure</h2>
          </ExternalLink>
        </li>
      </ul>
      <h2>Websites</h2>
      <ul>
        <li className="listItem">
          <ExternalLink href="https://github.com/alexbensimon/laccord-parfait">
            <h2 className="itemTitle">L'accord parfait</h2>
          </ExternalLink>
        </li>
        <li className="listItem">
          <ExternalLink href="https://github.com/alexbensimon/personal-website">
            <h2 className="itemTitle">This website</h2>
          </ExternalLink>
        </li>
        <li className="listItem">
          <ExternalLink href="https://github.com/alexbensimon/maman">
            <h2 className="itemTitle">Mom's website</h2>
          </ExternalLink>
        </li>
      </ul>
      <h2>Advent of Code</h2>
      <ul>
        <li className="listItem">
          <ExternalLink href="https://github.com/alexbensimon/aoc-2024">
            <h2 className="itemTitle">AoC 2024 in C++</h2>
          </ExternalLink>
        </li>
        <li className="listItem">
          <ExternalLink href="https://github.com/alexbensimon/aoc-2022">
            <h2 className="itemTitle">AoC 2022 in Python</h2>
          </ExternalLink>
        </li>
        <li className="listItem">
          <ExternalLink href="https://github.com/alexbensimon/aoc-2021">
            <h2 className="itemTitle">AoC 2021 in Elixir</h2>
          </ExternalLink>
        </li>
        <li className="listItem">
          <ExternalLink href="https://github.com/alexbensimon/advent-of-code-2020">
            <h2 className="itemTitle">AoC 2020 in Rust</h2>
          </ExternalLink>
        </li>
      </ul>
      <h2>Misc</h2>
      <ul>
        <li className="listItem">
          <ExternalLink href="https://replit.com/@alexbensimon/DiscorDynamic">
            <h2 className="itemTitle">Discord bot on Replit</h2>
          </ExternalLink>
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
