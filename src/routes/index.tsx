import type { DocumentHead } from '@builder.io/qwik-city';

import RootPage from './about';

export const Routes = [
  { title: 'About', url: '/about' },
  { title: 'Games', url: '/games' },
];

export default RootPage;

export const head: DocumentHead = {
  title: "Albert's Portfolio",
  meta: [
    {
      name: 'description',
      content: "Albert's portfolio site",
    },
  ],
};
