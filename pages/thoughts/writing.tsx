import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { ThoughtDate } from '../../components/ThoughtDate';

const Writing = () => (
  <>
    <Head>
      <title>Writing | Thoughts | Alexandre Bensimon</title>
      <meta name="description" content="Thoughts on writing." />
    </Head>
    <div>
      <h1>Writing</h1>
      <ThoughtDate>2020-08-01 (last edited: 2020-12-29)</ThoughtDate>
      <p>
        I can't help thinking about all kinds of stuff all the time. It's often
        philosophical or existential topics like "how does the human mind and
        consciousness work?", "can a life without meaning be good?", "what is
        meaning anyway?", "what does it mean to be happy?" or "is death really
        necessary in order to enjoy life?". Sometimes it's more down to earth
        matter like "what's the least amount of exercise I can do to be fit and
        healthy?" or "on which criteria should I choose a life partner?".
      </p>
      <p>
        These topics can ignite good discussions. I love debating with friends
        and family. One good thing about talking is the feedback you get in
        real-time. What other people say may help you view things in a
        completely different way. But I find it hard to think deeply when
        talking. Most of the time it seems I only repeat what I've already
        thought about on my own. It's also easy to get carried away by the
        debate. Ego comes in the way and it becomes an invisible fight for power
        and appreciation instead of moving the conversion forward.
      </p>
      <p>
        When I'm alone, I can think more deeply. But I find that only reflecting
        is not enough. When I sit and think, I often take shortcuts and reach a
        conclusion without noticing flaws in my thinking path. It's harder to
        cheat when writing. You can see the written words screaming at you. You
        can then fix what makes no sense to you. Writing acts as a way to spot
        holes in thinking.
      </p>
      <p>
        I already talked about language as an{' '}
        <Link href="/thoughts/abstractions">
          <a>abstraction</a>
        </Link>{' '}
        of thinking. I find it really interesting to look for the right words
        and phrases to express a feeling or a thought. It's not easy. A thought
        can be so abstract that I can't find a way to put it into words. But
        when I succeed, it's so rewarding. I hope that by improving my writing,
        I can improve my thinking.
      </p>
      <p>
        If I keep the habit of writing, I will later be able to read some old
        thoughts and notice how my way of thinking and opinions changed. Because
        I allow myself to be wrong, it gives me the freedom to be honest. I want
        these posts to be like snapshots of my thoughts.
      </p>
      <p>
        I call these posts "thoughts" because that's really how I feel about
        what I write. When something makes me think a lot, I'll write about it.
        I don't want to pick a specific audience or topic. I just want to write
        about what I find the most interesting right now. With no self-imposed
        posting rate or word count.
      </p>
      <p>
        I could achieve all this by writing in private so why starting yet
        another public blog when there is more stuff online than anyone will
        ever be able to read? First, writing online under my own name puts
        enough pressure on me that I won't compromise on quality. Most of what I
        write will probably be bad, but I will at least do my best. Second, I
        grew up hiding a lot of my thoughts and emotions. Life is easier this
        way. Nobody can judge you if they know nothing about you. But it's a
        trap. Everyone has fears, wants, and doubts. Hiding it can work in the
        short term but people will eventually figure it out. Being open about it
        is showing that you're just like everybody else and it's okay.
        Authenticity is a great path to confidence.
      </p>
      <p>
        French is my first language, so why writing in English? Most of the
        content I consume is in English. It's the language of the Internet. As I
        have been explaining in this post, my reasons for writing are mainly
        about learning. But if as a consequence of exploring my own mind I can
        help other people think in new ways, all the better. I learned so much
        online that it can be my way of giving back. The most impact I can have
        is obviously in English.
      </p>
    </div>
  </>
);

export default Writing;
