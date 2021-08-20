import Head from 'next/head';
import React from 'react';
import { ThoughtDate } from '../../components/ThoughtDate';

const Indistractable = () => (
  <>
    <Head>
      <title>Indistractable | Thoughts | Alexandre Bensimon</title>
      <meta
        name="description"
        content="Thoughts on Nir Eyal's book Indistractable."
      />
    </Head>
    <div>
      <h1>Indistractable</h1>
      <ThoughtDate>2021-08-20</ThoughtDate>
      <p>
        The book{' '}
        <a
          href="https://www.goodreads.com/book/show/44595007-indistractable"
          target="_blank"
          rel="noopener noreferrer"
        >
          Indistractable
        </a>{' '}
        is about how to deal with distractions. It doesn’t express any judgement
        on what distractions are, but rather what one can do about them. It
        sounds simple but we all have some things we don’t manage quite right.
        Mine, for instance, is sugar.
      </p>
      <p>
        A good question to ask yourself about something you enjoy is “do I like
        the fact that I’m enjoying it?”. In my case, I love sweet snacks, and
        cakes, and candies. However, I dislike these cravings, for obvious
        health reasons.
      </p>
      <p>
        The next question to ask yourself is,“what am I going to do about it?”.
        A sovereign individual doesn’t just rant about how sweets are too hard
        to resist and then complains about being unhealthy and fat. We know it
        is designed to be addictive. We have to take responsibility for
        ourselves and find tools and techniques to take control over our own
        distractions and fight these urges back.
      </p>
      <p>
        Here, I’m going to describe the ideas I used from the book that helped
        me reduce my sugar intake.
      </p>
      <h2>The effort pact</h2>
      <p>
        The first idea is the effort pact: "An effort pact is a kind of
        precommitment that involves increasing the amount of effort required to
        do something you don’t want to do. Adding additional effort forces you
        to ask if a distraction is really worth it and usually you decide that
        it isn’t".
      </p>
      <p>
        To increase the amount of effort required to eat sweets, I’ve decided
        not to keep any at home. This way, when I have a sugar craving, I think
        about how I have to leave my place, go down the stairs, and walk to the
        supermarket to buy something, which is way too much effort just to
        soothe a craving… so I end up eating almonds instead.
      </p>
      <p>
        The idea of the effort pact is really powerful. It can also be described
        as moving the inertia point where you want to be pulled so that you
        effortlessly do the right thing. You could have some sweets at home and
        not eat it, but why make your life harder? It’s a trap to think you’ll
        have enough willpower to resist, because even if at one moment it's
        clear in your mind you don't want to do it, you cannot predict what
        state of mind you'll be in tomorrow. By making the choices easier for
        yourself, you increase your probability of success.{' '}
        <a
          href="https://en.wikipedia.org/wiki/Ulysses_pact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ulysses understood this
        </a>{' '}
        and tied himself up to the boat to be able to listen to the mermaids
        without jumping into the ocean. In software design, a similar idea is
        the{' '}
        <a
          href="https://blog.codinghorror.com/falling-into-the-pit-of-success/"
          target="_blank"
          rel="noopener noreferrer"
        >
          pit of success
        </a>
        .
      </p>
      <h2>The identity pact</h2>
      <p>
        Another idea I’ve been using from the book is the identity pact : “Your
        self-image has a profound impact on your behavior. By taking on a new
        identity, you empower yourself to make decisions based on who you
        believe you are. Consider how people who call themselves “vegetarians”
        don’t have to expend much willpower to avoid eating meat”.
      </p>
      <p>
        I picture my ideal self as someone who thinks long-term and doesn’t fall
        for the easy immediate pleasure. Hence, whenever I crave sweets, I know
        it will make my future self suffer and therefore I tend to avoid it.
      </p>
      <p>
        I think it’s okay to cut loose from time to time. For example, I’ve
        decided to allow myself to eat dessert when I go out, which I believe is
        fine because it’s a conscious choice. I’m making a compromise with
        myself to enjoy good things in a reasonable way. Remember, being
        indistractable is about doing the things you want to do.
      </p>
      <h2>Beyond external triggers</h2>
      <p>
        These are the pragmatic techniques I use for what are described in the
        book as <em>the hacking of external triggers</em>. These are the
        triggers that make you act based on external distractions. It could also
        be interesting to look at internal triggers but for this, we have to
        understand the depth and nature of distractions.
      </p>
      <p>
        We are often distracted as an escape from discomfort. When we feel
        stressed or bored, an easy and pleasurable distraction can release the
        tension we’re feeling. By being mindful (meditation can help), we can
        become aware of the feeling of discomfort. Instead of trying to appease
        the tension right away, we can breathe deeply and try to understand
        where the discomfort comes from. Most of the time, the impulse will just
        go away.
      </p>
    </div>
  </>
);

export default Indistractable;
