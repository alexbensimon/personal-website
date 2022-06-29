import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { ExternalLink } from '../../components/ExternalLink';
import { ThoughtDate } from '../../components/ThoughtDate';

const QuantifiedSelf = () => (
  <>
    <Head>
      <title>Quantified self | Thoughts | Alexandre Bensimon</title>
      <meta name="description" content="Thoughts on quantified self." />
    </Head>
    <div>
      <h1>Quantified self</h1>
      <ThoughtDate>2022-06-29</ThoughtDate>
      <p>
        Behind this seemingly complicated term, lies a rather simple concept: we
        can gather and analyze data from our body and behavior to find ways to
        improve ourselves. We often talk about health related data such as the
        quantity and quality of sleep but it’s actually a broader concept. For
        example, some people precisely track how they spend their time each day
        in order to improve their productivity and live more efficiently.
      </p>
      <p>
        The main idea is that you usually need to measure something in order to
        improve it. How we feel about something is not always a good indication
        of how the thing really is. Let's say you want to lose weight (how
        original). It's tempting to think that eating until you "feel full" is
        enough and that the "body knows how to regulate itself". If this were
        true, people wouldn’t be overweight so obviously something else is going
        on here. I’ve{' '}
        <Link href="/thoughts/guidelines">
          <a>already written</a>
        </Link>{' '}
        about how our bodies have not evolved to deal with modern society and
        how we have found ways to hack our cravings. You'd better get ideas like
        "I feel good when I do/eat/read/think this so it's got to be good for
        me" out of your head or you’re going to get in a lot of trouble. If we
        accept the fact that we cannot trust our own instinct, we have to use
        tangible and objective data to be able to make better decisions. As
        David Sinclair{' '}
        <ExternalLink href="https://www.youtube.com/watch?v=wD8reCw3Kls">
          says
        </ExternalLink>
        : "You wouldn't drive a car without a dashboard so why do we do that for
        our bodies which are even more important".
      </p>
      <h2>Vision for the future</h2>
      <p>
        We should differentiate between chronological age (since when we were
        born) and biological age (estimation of your health and fitness levels
        using multiple biomarkers).{' '}
        <ExternalLink href="https://medium.com/@sergefaguet/hundreds-of-biomarkers-i-test-in-pursuit-of-focus-health-energy-confidence-and-happiness-dd01572c518b">
          Some
        </ExternalLink>{' '}
        <ExternalLink href="https://blueprint.bryanjohnson.co/">
          people
        </ExternalLink>{' '}
        already have a great knowledge of a lot of their biomarkers and how to
        improve them, which requires the right doctors and expensive care.
        Hopefully, it will become cheaper in the future.
      </p>
      <p>
        Two main advantages of the quantified self on health are personalization
        and prevention. At the moment, the health sector is generalized: you
        consume food and pills that are mass produced. This is mainly a cost
        problem: collecting data on yourself and getting personalized healthcare
        are currently both expensive. In the future, we can imagine that instead
        of going to the lab to get a blood test, we could have personal sensors
        that collect and analyze blood at home. Based on the results we could
        receive daily deliveries of food and pills made for our precise needs.
      </p>
      <p>
        Although we’re making progress on the prevention side, most people
        currently live their life in a reactive way. We go to the doctor when we
        feel sick and we don’t really mind what we eat before getting unhealthy.
        For cancer, we know that the earlier we find a tumor, the more chance of
        survival we have. By regularly measuring our biomarkers, this knowledge
        could be analyzed by AI models to detect early signs of disease and
        course-correct immediately.
      </p>
      <p>
        Women can{' '}
        <ExternalLink href="https://www.naturalcycles.com/">
          already
        </ExternalLink>{' '}
        use ovulation periods and other related data as a birth-control method
        instead of a hormonal method. Hormones are a big subject for women and
        men alike. Hopefully we’ll be able to get interesting data to help fix
        hormone imbalances.
      </p>
      <p>
        Consumer products and sensors are improving every year. In the future,
        we won’t have to charge them or even think about them, they’ll just
        collect data automatically and give us advice and warnings to improve.
      </p>
      <p>
        The next really interesting frontier will be the brain. The company{' '}
        <ExternalLink href="https://www.kernel.com/">Kernel</ExternalLink> is
        working on a headset that could read and analyze our neurological
        patterns. We could quantify when we’re the most receptive to learning,
        how meditation affects our brain, the evolution of our mood throughout
        the day or better understand and treat depression.
      </p>
      <h2>What can we do right now?</h2>
      <p>
        The future looks bright but there are already great products available
        today that we can use:
      </p>
      <h3>Wearables</h3>
      <p>
        These are currently the most common and simple to use. Most of them can
        track your heart rate pattern (useful for exercise, meditation and
        stress mitigation) and your sleep (quantity and quality). Some can even
        track your blood oxygen or the sound level in your environment so that
        you know if you are exposed to volumes that are too loud.
      </p>
      <p>We can split them in three categories:</p>
      <ul>
        <li>
          Smartwatch: this includes the watches from Apple, Samsung, Huawei and
          many others. This kind of watch integrates best with your smartphone
          ecosystem and is more focused on lifestyle and customization. You can
          usually use the watch to call, send messages, get directions, and do a
          lot of things you can do with your phone.
        </li>
        <li>
          Sport watch: This category is dominated by Garmin. I put it in a
          different category because these are usually more bulky and the target
          audience is people doing more intense exercise or outside sports like
          trekking or rafting.
        </li>
        <li>
          Fitness tracker: These are usually more minimalistic. This includes
          fitbit bands, Whoop, the Oura ring, etc. Most of the time it has a
          very basic screen or no screen at all so you usually forget about it
          and you use your phone to see the data.
        </li>
      </ul>
      <p>
        If you want to stay updated and compare wearables,{' '}
        <ExternalLink href="https://www.youtube.com/c/TheQuantifiedScientist">
          The Quantified Scientist
        </ExternalLink>{' '}
        does in-depth testing and analysis of many wearables.
      </p>
      <h3>Sleep specific</h3>
      <p>
        If you don’t like to wear a watch or a ring while you sleep, there are
        other good options for sleep tracking, from{' '}
        <ExternalLink href="https://www.withings.com/us/en/sleep">
          sleeping mats
        </ExternalLink>{' '}
        to{' '}
        <ExternalLink href="https://www.eightsleep.com/eight-pod-sleep-cool/">
          smart mattresses
        </ExternalLink>
        .
      </p>
      <h3>Nutrition</h3>
      <p>
        This is the most complex to track right now. Some people log everything
        they eat in apps like{' '}
        <ExternalLink href="https://www.myfitnesspal.com/fr">
          MyFitnessPal
        </ExternalLink>{' '}
        so they can precisely know their macro and micro nutrients levels.
      </p>
      <p>
        Continuous glucose monitors can track the amount of glucose in your
        blood to understand what type of foods have the worst effect on you. Of
        course we don’t need a CGM to know that eating a cookie will spike our
        blood glucose, but some people react differently to potatoes, rice and
        bananas for exemple. CGMs are still mainly used by people who have
        diabetes but{' '}
        <ExternalLink href="https://www.levelshealth.com/">
          some brands
        </ExternalLink>{' '}
        are trying to make them mainstream.
      </p>
      <h3>Body composition</h3>
      <p>
        Knowing your height and weight (BMI) is not enough to know if you’re
        healthy. Some people are in the “overweight” category but because of the
        muscle weight. And the “healthy” range is too broad to give interesting
        information on your fitness level. You actually need to know how much
        muscle and fat percentage you have. Using some kind of{' '}
        <ExternalLink href="https://www.withings.com/fr/fr/scales">
          smart scale
        </ExternalLink>{' '}
        can give you much more information than a regular scale.
      </p>
      <h3>Air quality</h3>
      <p>
        When we think of pollution we often think of cities with old cars and no
        trees. But actually, the air inside your room can get polluted really
        quickly if you don’t get fresh air in. Some{' '}
        <ExternalLink href="https://www.netatmo.com/en-us/aircare/homecoach">
          sensors
        </ExternalLink>{' '}
        can help you know when the air quality is bad and{' '}
        <ExternalLink href="https://www.dyson.com/air-treatment">
          other products
        </ExternalLink>{' '}
        can automatically purify the air.
      </p>
      <p></p>
      <p></p>
    </div>
  </>
);

export default QuantifiedSelf;
