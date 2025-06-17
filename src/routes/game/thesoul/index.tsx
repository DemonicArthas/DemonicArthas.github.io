import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { type GameConfig } from '~/components/game-card/game-card';

export const config: GameConfig = {
  id: 'thesoul',
  title: 'The Soul',
  description: 'The Soul is an action-adventure game about a monster hunter Max who seeks supernatural (get it?) and gets rid of it.',
  order: 1,
};

export default component$(() => {
  return (
    <div class="bg-base-200 p-2">
      <article class="prose p-4 lg:prose-lg">
        <h2>The Soul</h2>
        <p>The Soul is an action-adventure game most similar to recent action-adventure and survival-horror games.</p>
        <p>I was closely working with a small team of developers and was directly (or indirectly) behind many of the game's systems and design decisions, and their implementations. I've worked on interaction logic, inventory and menu systems, overall gameplay look and feel, movement and fighting system, dialogue implementation, voice control implementation, done some animation work and much, much more.</p>
        <video width="1024" height="768" controls autoplay muted>
          <source src="/games/thesoul/Footage_TheSoul.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <br></br>
      </article>
    </div>
  );
});

export const head: DocumentHead = {
  title: "The Soul - Albert's Portfolio",
  meta: [
    {
      name: 'description',
      content: 'The Soul page',
    },
  ],
};
