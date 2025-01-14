import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="bg-base-200 p-2">
      <article class="prose p-4 lg:prose-lg">
        <h2>Supernatural: The Game</h2>
        <p>Supernatural The Game is a short prequel to the famous TV-series</p>
      </article>
      <video width="1024" height="768" controls autoplay muted>
        <source src={`/games/supernatural/footage.mp4`} type="video/mp4" />
      Your browser does not support the video tag.
      </video> 
    </div>
  );
});

export const head: DocumentHead = {
  title: "Albert's Portfolio",
  meta: [
    {
      name: 'description',
      content: "Albert's portfolio site",
    },
  ],
};
