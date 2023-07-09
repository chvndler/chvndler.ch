export const themeEffect = function (): 'dark' | 'light' {
  const pref: string | null = localStorage.getItem('theme');

  if (pref === null) {
    document.documentElement.classList.add('theme-system');
  } else {
    document.documentElement.classList.remove('theme-system');
  }

  if (
    pref === 'dark' ||
    (!pref && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('pause-transitions');
    document.documentElement.classList.add('dark');

    const themeColorMeta = document.head.querySelector(
      'meta[name=theme-color]',
    );
    if (themeColorMeta !== null) {
      themeColorMeta.setAttribute('content', '#1c1c1c');
    }

    requestAnimationFrame(() => {
      document.documentElement.classList.remove('pause-transitions');
    });

    return 'dark';
  } else {
    document.documentElement.classList.add('pause-transitions');
    document.documentElement.classList.remove('dark');

    const themeColorMeta = document.head.querySelector(
      'meta[name=theme-color]',
    );
    if (themeColorMeta !== null) {
      themeColorMeta.setAttribute('content', '#fcfcfc');
    }

    requestAnimationFrame(() => {
      document.documentElement.classList.remove('pause-transitions');
    });

    return 'light';
  }
};
