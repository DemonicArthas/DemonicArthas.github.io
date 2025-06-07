import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { type GameConfig } from '~/components/game-card/game-card';

export const config: GameConfig = {
  id: 'neonblack',
  title: 'Neon Black',
  description: 'Neon Black is a stealth-action platformer',
  order: 2,
};

export default component$(() => {
  return (
    <div class="bg-base-200 p-2">
      <article class="prose p-4 lg:prose-lg">
        <h2>Neon Black</h2>
        <p>
          3D stealth-action platformer. Avoid the gaze of "The Boss", take down guards and collect various usable items
          to aid you in your quest.
        </p>
        <p>Team project where I was fully responsible for game design and level design decisions.</p>
        <video width="1024" height="768" controls muted>
          <source src="/games/neonblack/footage_NeonBlack.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <a href="NeonBlackBuild.zip">Download Neon Black</a>
      </article>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Neon Black - Albert's Portfolio",
  meta: [
    {
      name: 'Stealth-action platformer',
      content: 'Neon Black',
    },
  ],
};
