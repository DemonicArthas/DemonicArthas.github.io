(function () {
    let theme = localStorage.getItem('theme-state');

    if (!theme || theme == 'auto') {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    document.documentElement.setAttribute('data-theme', theme);
})();

function themeSwitcher() {
    function onClick(e) {
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
    }

    function onChange(e) {
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
    }

    const themeSwitcher = document.getElementById('theme-switcher');
    if (!themeSwitcher) return;

    themeSwitcher.addEventListener('click', onClick);
    themeSwitcher.addEventListener('change', onChange);
    themeSwitcher.dispatchEvent(new Event('change'));
}

window.addEventListener('load', function () {
    themeSwitcher();
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    const themeState = localStorage.getItem('theme-state');
    if (themeState != null && themeState != 'auto') return;

    const theme = event.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);

    const themeSwitcher = document.getElementById('theme-switcher');
    if (themeSwitcher) themeSwitcher.dispatchEvent(new Event('change'));
});
