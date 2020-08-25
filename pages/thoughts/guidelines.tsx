import Head from 'next/head';
import React from 'react';
import { ThoughtDate } from '../../components/ThoughtDate';

export default () => (
  <>
    <Head>
      <title>Guidelines | Thoughts | Alexandre Bensimon</title>
      <meta name="description" content="Guidelines I live by." />
    </Head>
    <div>
      <h1>Guidelines</h1>
      <ThoughtDate>2020-08-12 (last edited: 2020-08-25)</ThoughtDate>
      <p>
        I've thought a lot about what kind of habits I need to cultivate to be
        my most happy and productive self. For many years, I tried every
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
        them. I spent a lot of time refining my habits: kicking out what didn't
        work and simplifying what did. I wanted to find the core principles that
        would encompass all the rest. I ended up realizing that a shortlist of
        actions was enough to help me in most situations. This way, writing them
        in a note file works just fine. Here are the simple guidelines I try to
        live by to stay physically and mentally fit:
      </p>
      <h2>Sleep</h2>
      <ul>
        <li>8-9 hours of sleep opportunity</li>
        <li>Go to bed and wake up at the same time</li>
        <li>Keep the room cold (18-19 °C)</li>
        <li>Avoid screens around bedtime</li>
        <li>Avoid eating around bedtime</li>
        <li>Avoid snoozing (better yet: no alarm)</li>
      </ul>
      <h2>Exercise</h2>
      <ul>
        <li>15 minutes of interval resistance training every day</li>
        <li>Take the stairs</li>
      </ul>
      <h2>Nutrition</h2>
      <ul>
        <li>Avoid processed food</li>
        <li>
          Avoir high sugar (candies, ice cream, pastries, etc.) and simple carbs
          (white bread, pastas, etc.)
        </li>
        <li>Avoid fruit juice and soft drinks</li>
        <li>Avoid alcohol</li>
        <li>Avoid tea and coffee</li>
        <li>Eat a lot of vegetables and a few fruits</li>
        <li>
          Consume high-quality products (free-range eggs, organic fruits and
          vegetables, quality meat, etc.)
        </li>
      </ul>
      <h2>Fasting</h2>
      <ul>
        <li>16-hour fast every day</li>
        <li>1-day fast every week</li>
        <li>3-day fast every month</li>
        <li>5-day fast every 3 months (work in progress)</li>
        <li>7-day fast every 6 months (work in progress)</li>
        <li>10-day fast every year (work in progress)</li>
      </ul>
      <h2>Mental</h2>
      <ul>
        <li>15 minutes of silent meditation every day</li>
        <li>Avoid video games</li>
        <li>Avoid social networks</li>
        <li>Avoid porn</li>
        <li>Express gratitude</li>
        <li>Have a life vision</li>
      </ul>
    </div>
  </>
);
