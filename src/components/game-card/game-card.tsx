import { component$ } from '@builder.io/qwik';

export type GameConfig = {
  id: string;
  title: string;
  description: string;
  order?: number;
  hidden?: boolean;
};

export interface GameCardProps {
  game: GameConfig;
}

export const GameCard = component$<GameCardProps>((props) => {
  return (
    <a
      key={props.game.id}
      href={`/game/${props.game.id}`}
      class="hover:bg-base-0 group card image-full card-compact aspect-square cursor-pointer select-none bg-base-100 shadow-xl"
    >
      <div class="card-body">
        <h2 class="card-title">{props.game.title}</h2>
        <p>{props.game.description}</p>
      </div>
      <figure>
        <img
          width="200"
          height="280"
          class="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
          src={`/games/${props.game.id}/image.jpg`}
          alt={props.game.id}
        />
      </figure>
      <figure class="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <picture class="h-full w-full">
          <source srcset={`/games/${props.game.id}/image.avif`} type="image/avif" />
          <source srcset={`/games/${props.game.id}/image.webp`} type="image/webp" />
          <img
            width="200"
            height="280"
            class="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
            src={`/games/${props.game.id}/image.jpg`}
            alt={props.game.id}
          />
        </picture>
      </figure>
    </a>
  );
});
