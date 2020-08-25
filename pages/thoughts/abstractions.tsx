import Head from 'next/head';
import React from 'react';
import { ThoughtDate } from '../../components/ThoughtDate';

export default () => (
  <>
    <Head>
      <title>Abstractions | Thoughts | Alexandre Bensimon</title>
      <meta name="description" content="Thoughts on abstractions." />
    </Head>
    <div>
      <h1>Abstractions</h1>
      <ThoughtDate>2020-05-25</ThoughtDate>
      <p>
        When I try to explain what I do to non-technical people, I often fail to
        go beyond: "Well... when you go on Instagram and click on that button to
        follow someone, people like me had to program all the stuff happening
        behind the scenes".
      </p>
      <p>
        When we learn how to drive a car, we first learn how to use the steering
        wheel: turn it to the right or the left depending on where you want to
        go. Then, we learn about the pedals: press this one to speed up and this
        one to break. In France we still learn to drive a car on a manual
        transmission so we learn how to use the shift gear and so on. This is
        the interface between the driver and the car.
      </p>
      <p>
        A car is a complex machine, but we don't need to understand how the
        engine and all the other mechanical parts work. We only need to know how
        to use it. The interface abstracts away the complexity.
      </p>
      <p>
        Using a service like Uber, we only need a destination. We don't need to
        know how to drive anymore. The complexity of driving the car still
        exists, we only use a different interface. Another layer of abstraction.
      </p>
      <p>
        But more abstraction is not always what we want. With Uber, we cannot
        drive at the speed we like, or choose the route. We have traded control
        for simplicity.
      </p>
      <p>
        This equilibrium is a central theme in software. To make our code easier
        to reason about, we create our own abstractions. But the hard part is
        choosing what code to abstract and how to design the interface. Not
        enough abstraction and we lose readability, too much and we lose
        flexibility.
      </p>
      <p>
        When we learn a word in a new language, we first link it with its
        translation in our native language. As we start to improve, words
        directly connect to thoughts. We think in the language itself instead of
        using our main language as a proxy. Only then can we understand some
        subtle meaning, often lost in translation.
      </p>
      <p>
        In this way, language is yet another abstraction. We can sometimes
        express very complex thoughts with simple words. Thinking clearly is
        being able to dig into the mental layers of language.
      </p>
    </div>
  </>
);
