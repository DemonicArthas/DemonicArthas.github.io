import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';

import { Navbar } from '../components/navbar/navbar';
import { ThemeSwitcher } from '../components/theme-switcher/theme-switcher';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div class="mockup-window bg-base-100 m-4 max-w-5xl border shadow-xl md:mx-auto">
      <Navbar routes={[]}>
        <ThemeSwitcher q:slot="navbar-end" />
      </Navbar>
      <Slot />
    </div>
  );
});
