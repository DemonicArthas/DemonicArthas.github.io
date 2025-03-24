import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { GameCard, type GameConfig } from '~/components/game-card/game-card';

const games = Object.values(
  import.meta.glob('/src/routes/game/**/*.tsx', { eager: true }) as {
    [key: string]: { config: GameConfig | undefined };
  },
)
  .map((route) => route.config)
  .filter((route) => route && !route.hidden)
  .sort((a, b) => (a?.order !== undefined ? a.order : Infinity) - (b?.order !== undefined ? b.order : Infinity));

export default component$(() => {
  return (
    <article class="prose max-w-full bg-base-200 p-4 lg:prose-lg">
      <img
        width="200"
        height="266"
        class="float-left mb-4 me-4 max-w-64 select-none rounded-lg shadow-md"
        src={`/images/photo.jpg`}
        alt="photo"
      />

      <h2>Hello there 👋</h2>
      <p>
        My name is Albert Leonov and I'm a technical game designer. I love designing and implementing game mechanics,
        creating levels or just messing around in Unreal Engine 4 and 5. I can create a prototype for you from scratch,
        design and develop a new game mechanic for your project or consult on anything and everything concerning Unreal!
      </p>

      <h2 class="clear-both">Games</h2>
      <div class="not-prose xs:grid-cols-1 grid gap-4 bg-base-200 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {games.map((game) => (
          <GameCard key={game!.id} game={game!} />
        ))}
      </div>
    </article>
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
