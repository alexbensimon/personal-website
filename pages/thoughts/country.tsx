import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { ThoughtDate } from '../../components/ThoughtDate';

const Country = () => (
  <>
    <Head>
      <title>Country | Thoughts | Alexandre Bensimon</title>
      <meta
        name="description"
        content="Thoughts on starting a new country online."
      />
    </Head>
    <div>
      <h1>Country</h1>
      <ThoughtDate>2021-04-12</ThoughtDate>
      <p>
        I've recently heard about{' '}
        <a
          href="https://twitter.com/balajis"
          target="_blank"
          rel="noopener noreferrer"
        >
          Balaji S. Srinivasan
        </a>{' '}
        and his really interesting project{' '}
        <a
          href="https://1729.com/a-newsletter-that-pays-you/"
          target="_blank"
          rel="noopener noreferrer"
        >
          1729.com
        </a>{' '}
        . I'm into a lot of subjects Balaji talks about, including decentralized
        cooperation. Here are my thoughts on{' '}
        <a
          href="https://1729.com/how-to-start-a-new-country/"
          target="_blank"
          rel="noopener noreferrer"
        >
          starting a new country online
        </a>
        .
      </p>
      <p>
        Online communities have existed for a while now. You can find subreddits
        about pretty much any interest you might have. Everyone can share and
        engage with other members. There are often administrators to enforce
        basic rules about spam and insults. But some communities have a special
        taste. It’s only when hanging out in them for a long enough time that
        you can understand the culture.
      </p>
      <p>
        I discovered pretty young how powerful online communities can be. When I
        used to play{' '}
        <Link href="/thoughts/games">
          <a>games</a>
        </Link>
        , I was a member of an online group. We practiced together, shared
        strategies on our forum, challenged each other and recruited other
        members. The hierarchy, when needed, was based on merit. We had the same
        goals despite being of different age, country, or background. I felt
        deeply connected to them. Way more than to my high school classmates.
      </p>
      <p>
        Having a rich online life reduces the importance of your physical
        location. But the place you live in still has an{' '}
        <a
          href="http://www.paulgraham.com/cities.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          impact
        </a>{' '}
        on you. You obviously have to obey local laws. But more importantly,
        we're social creatures. Our brains are wired to give more meaning to
        in-person interactions. I really believe you're the average of the
        people you hang out the most with. Maybe one day we'll be able to
        virtually reproduce the exact feeling of being physically with someone,
        but we're not there yet. Until then, our local environment will continue
        to shape us, whether we want it or not.
      </p>
      <p>
        I’ve thought about this a lot. On one side I want to stay mobile and not
        depend on one specific place. I also want it to be a conscious decision,
        not to stay somewhere because it’s the default choice. On the other
        side, I like the comfort of home and healthy long term habits so I don't
        think I could live a completely digital nomadic life. Maybe a good
        balance can be to explore a place for a few years and be ready to move
        if a better opportunity arises. But how do you choose a place to
        explore? Right now it seems more like making compromises to fit to a
        place than finding a place that really fits you.
      </p>
      <p>
        I currently live in Paris. There are many things I like here but I hate
        the ambient pessimism. People generally fear change and complain a lot.
        It seems every reform is welcomed with rage and more complaints. Covid
        is a good example. Whether the government is doing a lockdown or not,
        people will complain either about having their freedom taken away or
        about how we’re not doing enough to stop the deaths. It seems like an
        alignment problem. People don't think the government is acting in their
        best interest. Don't get me wrong, I don’t always agree with what the
        government is doing, but I try to focus on my circle of influence. I
        feel like complaining about stuff outside of my direct control is a
        waste of energy.
      </p>
      <p>
        I remember when thinking about what major to choose in engineering
        school. Finance, health and electronics were among the domains I found
        the most interesting. But I ended up choosing software because it felt
        like the one with the least permission needed. I knew that with a
        computer and an internet connection I could do almost anything. And I
        think this is where the idea of starting a country online has a lot of
        value. Because we don't need permission from existing entities, we can
        iterate on finding the right policies and incentives before going
        physical. And everyone could find one country that really fits them, or
        try to create their own. And if at some point there's too much legacy,
        we can try again from scratch.
      </p>
    </div>
  </>
);

export default Country;
