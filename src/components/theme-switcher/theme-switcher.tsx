import { component$ } from '@builder.io/qwik';

export const ThemeSwitcher = component$(() => {
  return (
    <label class="swap swap-rotate">
      <input
        type="checkbox"
        id="theme-switcher"
        onClick$={(e: any) => {
          const themeIndex = parseInt(localStorage.getItem('theme-index') || '0');

          let nextTheme, nextThemeState;
          switch (themeIndex) {
            // If current theme is auto or the first theme
            case 0:
            case 1:
              nextTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
              nextThemeState = nextTheme;
              break;
            // If current theme is the last theme
            default:
              nextTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              nextThemeState = 'auto';
              break;
          }

          document.documentElement.setAttribute('data-theme', nextTheme);
          localStorage.setItem('theme-state', nextThemeState);
          localStorage.setItem('theme-index', ((themeIndex + 1) % 3).toString());

          e.target.dispatchEvent(new Event('change'));
        }}
        onChange$={(e: any) => {
          const state = localStorage.getItem('theme-state');

          switch (state) {
            case 'light':
              e.target.indeterminate = false;
              e.target.checked = false;
              break;
            case 'dark':
              e.target.indeterminate = false;
              e.target.checked = true;
              break;
            default:
              e.target.indeterminate = true;
              e.target.checked = false;
              break;
          }
        }}
      />

      <svg class="swap-off h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg>

      <svg class="swap-on h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </svg>

      <svg class="swap-indeterminate h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M17.58 15.894a.764.764 0 0 0-.785-.2 6.153 6.153 0 0 1-2.623.254 6.23 6.23 0 0 1-5.456-6.875 6.566 6.566 0 0 1 .368-1.496.764.764 0 0 0-.908-.977 7.75 7.75 0 1 0 9.584 10.124.764.764 0 0 0-.18-.83zm-7.809 4.23A6.222 6.222 0 0 1 7.221 8.69l-.023.205a7.758 7.758 0 0 0 6.792 8.602 7.483 7.483 0 0 0 1.614.02 6.199 6.199 0 0 1-5.836 2.64l.003-.031z" />
        <path d="M9.56 14.04zm5.246-10.06a.742.792 0 0 0 .742-.792v-.791a.742.792 0 0 0-1.484 0v.791a.742.792 0 0 0 .742.792zm-4.72 1.623a.742.792 0 0 0 .52.23.742.792 0 0 0 .527-.23.742.792 0 0 0 0-1.117l-.527-.562A.742.792 0 0 0 9.56 5.04l.527.562zm8.905.23a.742.792 0 0 0 .52-.23l.526-.562a.742.792 0 1 0-1.046-1.117l-.475.562a.742.792 0 0 0 0 1.117.742.792 0 0 0 .49.23h-.015zm2.493 2.897h-.742a.742.792 0 0 0 0 1.583h.742a.742.792 0 0 0 0-1.583zm-1.959 4.75a.742.792 0 0 0-1.009 1.076l.527.562a.742.792 0 0 0 1.046 0 .742.792 0 0 0 0-1.116l-.564-.523zm-4.72-8.313a4.081 4.354 0 1 0 4.082 4.354 4.088 4.362 0 0 0-4.081-4.354zm0 7.125a2.597 2.77 0 1 1 2.598-2.77 2.597 2.77 0 0 1-2.597 2.77z" />
      </svg>
    </label>
  );
});
