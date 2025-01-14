import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="bg-base-200 p-2">
      <article class="prose p-4 lg:prose-lg">
        <h2>Hello there 👋</h2>
        <p>
          My name is Albert Leonov and I'm a technical game designer. I love designing and implementing game mechanics,
          creating levels or just messing around in Unreal Engine 4 and 5.
		  I can create a prototype for you from scratch, design and develop a new game mechanic for your project or consult on anything and everything concerning Unreal!
        </p>
      </article>
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
