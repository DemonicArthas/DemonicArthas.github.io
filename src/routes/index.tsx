import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export const Routes = [
  { title: 'About', url: '/about' },
  { title: 'Games', url: '/games' },
];

export default component$(() => {
  return (
    <div class="hero bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img
          width="200"
          height="280"
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">Welcome to my portfolio website!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
      </div>
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
