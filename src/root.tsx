import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';
import { isDev } from '@builder.io/qwik/build';

import './global.css';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && <link rel="manifest" href={`${import.meta.env.BASE_URL}manifest.json`} />}
        <script
          dangerouslySetInnerHTML={`
          (function() {
            let theme = localStorage.getItem('theme-state');

            if (!theme || theme == 'auto') {
              theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }

            document.documentElement.setAttribute('data-theme', theme);
          })();
          window.addEventListener('load', function() {
            const themeSwitcher = document.getElementById('theme-switcher');
            if (themeSwitcher) themeSwitcher.dispatchEvent(new Event('change'));
          });
          window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
            const themeState = localStorage.getItem('theme-state');
            if (themeState != null && themeState != 'auto') return;

            const theme = event.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);

            const themeSwitcher = document.getElementById('theme-switcher');
            if (themeSwitcher) themeSwitcher.dispatchEvent(new Event('change'));
          });
        `}
        ></script>
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        {!isDev && <ServiceWorkerRegister />}
      </body>
    </QwikCityProvider>
  );
});
