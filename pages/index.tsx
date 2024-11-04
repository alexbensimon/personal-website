import Head from 'next/head';
import React from 'react';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMedium,
  AiOutlineX,
} from 'react-icons/ai';
import { ExternalLink } from '../components/ExternalLink';

const Index = () => (
  <>
    <Head>
      <title>Alexandre Bensimon</title>
      <meta name="description" content="My personal website." />
    </Head>
    <div className="root">
      <img src="/img/photo.jpg" alt="My face" />
      <div className="icons">
        <ExternalLink href="https://x.com/alexbensimon">
          <AiOutlineX size="1.5em" title="Twitter" />
        </ExternalLink>
        <ExternalLink href="https://linkedin.com/in/alexandrebensimon/">
          <AiOutlineLinkedin size="1.5em" title="LinkedIn" />
        </ExternalLink>
        <ExternalLink href="https://github.com/alexbensimon">
          <AiOutlineGithub size="1.5em" title="Github" />
        </ExternalLink>
        <ExternalLink href="https://medium.com/@alexandrebensimon">
          <AiOutlineMedium size="1.5em" title="Medium" />
        </ExternalLink>
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

export default Index;
