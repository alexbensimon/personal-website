import Head from 'next/head';
import React from 'react';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMedium,
  AiOutlineTwitter,
} from 'react-icons/ai';

export default () => (
  <>
    <Head>
      <title>Alexandre Bensimon</title>
      <meta name="description" content="My personal website." />
    </Head>
    <div className="root">
      <img src="/img/photo.jpg" alt="My face" />
      <div className="icons">
        <a
          href="https://twitter.com/alexbensimon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineTwitter size="1.5em" />
        </a>
        <a
          href="https://linkedin.com/in/alexandrebensimon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin size="1.5em" />
        </a>
        <a
          href="https://github.com/alexbensimon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGithub size="1.5em" />
        </a>
        <a
          href="https://medium.com/@alexandrebensimon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMedium size="1.5em" />
        </a>
      </div>
    </div>
    <style jsx>{`
      .root {
        text-align: center;
      }
      img {
        width: 100px;
        border-radius: 100%;
        margin-bottom: 20px;
      }
      .icons {
        display: flex;
        justify-content: space-evenly;
      }
    `}</style>
  </>
);
