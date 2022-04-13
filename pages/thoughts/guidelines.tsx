import Head from 'next/head';
import React from 'react';
import { ThoughtDate } from '../../components/ThoughtDate';

const Guidelines = () => (
  <>
    <Head>
      <title>Guidelines | Thoughts | Alexandre Bensimon</title>
      <meta name="description" content="Guidelines I live by." />
    </Head>
    <div>
      <h1>Guidelines</h1>
      <ThoughtDate>2020-08-12 (last edited: 2022-04-13)</ThoughtDate>
      <p>
        I've thought a lot about what kind of habits I need to cultivate to be
        my most happy and productive self. For many years, I've tried every
        self-help micro-habits stuff I could find in books, blogs, and podcasts.
      </p>
      <p>
        I see these self-imposed guidelines as a positive constraint, a mental
        framework to help me make better decisions. It is a simple concept but I
        often fail to follow some of these rules. Why is this so hard? Because
        our human nature is not well adapted for the current times. We don't
        have a rational relationship with sweet food, porn, and video games.
        They provide an easy fix to our most intense cravings. They are
        addictive by design. We have to consciously opt-out if we don't want to
        suffer the negative consequences.
      </p>
      <p>
        Remembering a lot of self-imposed rules can be daunting. You then need
        yet another app or a complicated managing system to keep track of all of
        them. I spend a lot of time refining my habits: kicking out what doesn't
        work and simplifying what does. I want to find the core principles that
        empower everything else. I ended up realizing that a shortlist of
        actions was enough to help me in most situations. This way, writing them
        in a note file works just fine. Here are the simple guidelines I try to
        live by to stay physically and mentally fit. I will keep them updated if
        my habits change. Obviously, what works for me may not work for you.
      </p>
      <h2>Sleep</h2>
      <ul>
        <li>Use warm colors on screens in the evening</li>
        <li>Avoid alcohol in the evening</li>
        <li>Avoid eating or drinking around bedtime</li>
        <li>Avoid screens around bedtime</li>
        <li>Have a cooldown routine (read, relax...)</li>
        <li>Sleep in the dark (curtains, sleep mask)</li>
        <li>Go to bed and wake up around the same time everyday</li>
        <li>Get enough sleep (8-9 hours)</li>
        <li>Track your sleep (Apple Watch, Fitbit, Oura ring...)</li>
        <li>
          Avoid aggressive wake up with an alarm (use vibrations, progressive
          light...)
        </li>
        <li>Avoid snoozing</li>
        <li>Get sun exposure in the morning</li>
      </ul>
      <h2>Nutrition</h2>
      <ul>
        <li>Drink a lot of water</li>
        <li>Do some kind of fasting (16/8, OMAD...)</li>
        <li>
          Consume more: cruciferous vegetables, olive oil, nuts, seeds, fish,
          avocado, berries, fermented food
        </li>
        <li>
          Consume less: processed food, high sugar foods, red meat, soft drinks,
          alcohol
        </li>
        <li>Take some supplements (whey, vitamin D, omega-3, zinc...)</li>
      </ul>
      <h2>Exercise</h2>
      <ul>
        <li>
          Practice some functional strength and HIIT training (I do kettlebells)
        </li>
        <li>Do some kind of mobility training (stretching, yoga...)</li>
        <li>Use the stairs when you can</li>
        <li>Sit less, use a standing desk</li>
        <li>Track your activity (Apple Watch, Whoop...)</li>
      </ul>
      <h2>Mind</h2>
      <ul>
        <li>Follow a morning routine</li>
        <li>Meditate in the morning</li>
        <li>Avoid notifications</li>
        <li>Avoid video games</li>
        <li>Avoid social networks, news and TV</li>
        <li>Avoid porn</li>
        <li>Have a life vision and clear objectives</li>
      </ul>
      <h2>Misc</h2>
      <ul>
        <li>Track air quality (I use a Netatmo sensor)</li>
        <li>Aim at 5-8 hours of deep work per day</li>
        <li>Breathe through the nose</li>
        <li>Track body composition (smart scale)</li>
        <li>Take care of your skin</li>
      </ul>
    </div>
  </>
);

export default Guidelines;
