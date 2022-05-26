import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { ThoughtDate } from '../../components/ThoughtDate';

const MicroIncentives = () => (
  <>
    <Head>
      <title>Micro-incentives | Thoughts | Alexandre Bensimon</title>
      <meta name="description" content="Thoughts on micro-incentives." />
    </Head>
    <div>
      <h1>Micro-incentives</h1>
      <ThoughtDate>2022-05-26</ThoughtDate>
      <p>Incentives are what make you do things.</p>
      <p>
        Have you ever been to a festival party where drinks might cost a bit
        more but where you can get money back from returning your glass? It's an
        example of a "micro" incentive, because a small amount of money is
        enough to motivate the behavior. It works because an action that was
        previously free (throwing the glass away) now has a small cost. If this
        cost is greater than the annoyingness of having to keep the glass, we’ll
        bring it back. It seems crazy when explained like that but it’s actually
        what we do subconsciously.
      </p>
      <p>
        Of course, there are people who would have brought back the glass even
        without the incentive, and others who will throw the glass away anyway.
        But the exceptions are not important. What we care about is if the
        incentive creates more of the behavior we want. In the case of
        returnable glasses, I think we can safely speculate that it does.
      </p>
      <p>
        An incentive can be a carrot (reward for good behavior) or a stick
        (negative consequence for bad behavior). But in both cases the incentive
        amount must be proportional to the difficulty or importance of the
        behavior.
      </p>
      <p>
        Some people see incentives as some kind of a trick. As in “why don't
        people just do the right thing by default?”. Although I do sympathize
        with idealism, I’m more interested in ways to understand human nature
        and deal with it instead of dreaming about how everything could be
        different if people were just “better”.
      </p>
      <p>
        Don’t get me wrong, intrinsic motivation does exist but I don’t think
        it’s as “pure” as people might think. It’s most likely a combination of
        education and culture, which means that it’s also hackable. I agree with
        Balaji when he{' '}
        <a
          href="https://twitter.com/tferriss/status/1376565672034066432?s=20&t=gwgZhhFA26ZDngJpnf4pdA"
          target="_blank"
          rel="noopener noreferrer"
        >
          says
        </a>{' '}
        “If code scripts machines, media scripts human beings”.
      </p>
      <p>
        Our minds often simplify things to help us make decisions. It would take
        too much energy to think about all the variables that go into making the
        perfect decision every time. So instead, we make a quick choice and then
        rationalize it later to feel good about ourselves.
      </p>
      <p>
        If we have to leave the festival in a rush, without the financial
        incentive our agenda is surely more important than returning the glass.
        “It's not that big of a deal” we’ll think. And it’s precisely for these
        small decisions that we often don’t do the right thing because we think
        it doesn’t really matter.
      </p>
      <p>
        When parents ask their children "what do you think would happen if
        everyone did the same thing?", they try to teach them about selfishness.
        But the truth is that most people don't think about 2nd or 3rd order
        consequences to all of their actions everyday, it would be too tiresome.
      </p>
      <p>
        Some actions either don't have big consequences if done at a small
        scale, but also don't have immediate or visible results. Eating bad food
        is a good example. Eating a cookie once in a while is not a big deal.
        But how much is too much? The long term consequence is not clear in our
        mind because we can convince ourselves that we'll compensate by doing
        more exercise tomorrow. The immediate consequence is pleasure from the
        taste of the cookie. Good immediate consequence and blurry possible bad
        consequence in a long time? Easy decision. In order to make the correct
        decision right now, we need to have a clear vision of the consequences
        and the willpower to do the right thing. Of course the "best" decision
        healthwise would be to never eat cookies. But if you really like them
        (as I do), it’s probably worth it once in a while. So the right decision
        really depends on the frequency of the cookie eating, and of course the
        right frequency is a personal choice. Thinking about all of this every
        time we want to eat a cookie is annoying so we will most likely just eat
        it.
      </p>
      <p>
        That’s where short term incentives can help. We could for example use a
        continuous glucose monitor to see the impact of food on our blood
        glucose. We could set an alert if our blood glucose reaches a certain
        level. This way, eating a cookie has an immediate and quantifiable
        result: we see the blood glucose spike. We now have an incentive to not
        eat the cookie.
      </p>
      <p>
        I've already written a bit about why one should choose some{' '}
        <Link href="/thoughts/guidelines">
          <a>personal guidelines</a>
        </Link>
        . I think vision and incentives are complementary. The long term vision
        helps us planning how much cookie eating we want, and the short term
        incentive helps us follow the plan every day.
      </p>
    </div>
  </>
);

export default MicroIncentives;
