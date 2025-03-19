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
            <li>Prototyping</li>
            <li>Developing game mechanics using blueprints</li>
            <li>Technical game-design</li>
            <li>Everything related to driving (Impala)</li>
            <li>Some of the animation logic</li>
            <li>Some game-design decisions</li>
            <li>Implementing and integrating external assets</li>
           </ul>
      </article>
      <video width="1024" height="768" controls autoplay muted>
        <source src="/games/supernatural/footage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <br></br>
      <p>Some more (older) footage</p>
      <video width="1024" height="768" controls muted>
        <source src="/games/supernatural/footage_old.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Supernatural - Albert's Portfolio",
  meta: [
    {
      name: 'description',
      content: "Supernatural: The Game",
    },
  ],
};
