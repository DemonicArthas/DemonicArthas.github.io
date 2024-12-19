import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

const games = [
  {
    id: 'example',
    title: 'Game 1',
    description: 'Game 1 description',
  },
  {
    id: 'example',
    title: 'Game 2',
    description: 'Game 2 description',
  },
  {
    id: 'example',
    title: 'Game 3',
    description: 'Game 3 description',
  },
  {
    id: 'example',
    title: 'Game 4',
    description: 'Game 4 description',
  },
  {
    id: 'example',
    title: 'Game 5',
    description: 'Game 5 description',
  },
];

export default component$(() => {
  return (
    <div class="xs:grid-cols-1 grid gap-4 bg-base-200 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {games.map((game) => (
        <a
          key={game.id}
          href={`/game/${game.id}`}
          class="hover:bg-base-0 group card image-full card-compact aspect-square cursor-pointer select-none bg-base-100 shadow-xl"
        >
          <div class="card-body">
            <h2 class="card-title">{game.title}</h2>
            <p>{game.description}</p>
          </div>
          <figure>
            <img
              width="200"
              height="280"
              class="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
              src={`/games/${game.id}/image.jpg`}
              alt={game.id}
            />
          </figure>
          <figure class="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <picture class="h-full w-full">
              <source srcset={`/games/${game.id}/image.avif`} type="image/avif" />
              <source srcset={`/games/${game.id}/image.webp`} type="image/webp" />
              <img
                width="200"
                height="280"
                class="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
                src={`/games/${game.id}/image.jpg`}
                alt={game.id}
              />
            </picture>
          </figure>
        </a>
      ))}
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
