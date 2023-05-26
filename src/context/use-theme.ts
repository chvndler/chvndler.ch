export const themeEffect = function () {
  const pref = localStorage.getItem('theme');

  if (pref === 'dark') {
    document.documentElement.classList.add('dark');
  }

  if (pref === 'light') {
    document.documentElement.classList.remove('dark');
  }

  if (pref === null) {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkQuery.addEventListener('change', (e) => {
      const darkModeOn = e.matches;
      localStorage.setItem('theme', darkModeOn ? 'dark' : 'light');
    });
  }

  return () => {};
};
