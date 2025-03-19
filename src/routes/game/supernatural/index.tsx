import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="bg-base-200 p-2">
      <article class="prose p-4 lg:prose-lg">
        <h2>Supernatural: The Game</h2>
           <p>Supernatural The Game is a short fan-prequel to the famous TV-series</p>
           <p>I was responsible for:</p>
           <ul>
            <il>Prototyping</il>
            <il>Developing game mechanics using blueprints</il>
            <il>Technical game-design</il>
            <il>Everything related to driving (Impala)</il>
            <il>Some of the animation logic</il>
            <il>Some game-design decisions</il>
            <il>Implementing and integrating external assets</il>
           </ul>
      </article>
      <video width="1024" height="768" controls autoplay muted>
        <source src="/games/supernatural/footage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>Some more (older) footage</p>
      <video width="1024" height="768" controls autoplay muted>
        <source src="/games/supernatural/footage_old.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Albert's Portfolio - Supernatural",
  meta: [
    {
      name: 'description',
      content: "Supernatural: The Game",
    },
  ],
};
