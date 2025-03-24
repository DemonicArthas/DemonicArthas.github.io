import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import type { GameConfig } from '~/components/game-card/game-card';

export const config: GameConfig = {
  id: 'example',
  title: 'Game 1',
  description: 'Game 1 description',
  hidden: true,
};

export default component$(() => {
  return (
    <div class="bg-base-200 p-2">
      <article class="prose p-4 lg:prose-lg">
        <h2>Hi 👋</h2>
        <p>I can't wait for the content to appear here!</p>
      </article>
    </div>
  );
});

export const head: DocumentHead = {
  title: `${config.title} - Albert's Portfolio`,
  meta: [
    {
      name: 'description',
      content: `${config.title} - Albert's Portfolio`,
    },
  ],
};
