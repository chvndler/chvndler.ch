export const themeEffect = function () {
  const preferredTheme = localStorage.getItem('theme');
  const rootElement = document.documentElement;

  if (preferredTheme === 'dark') {
    rootElement.classList.add('dark');
  } else if (preferredTheme === 'light') {
    rootElement.classList.remove('dark');
  } else {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updatePreferredTheme = (e: { matches: any }) => {
      const darkModeOn = e.matches;
      localStorage.setItem('theme', darkModeOn ? 'dark' : 'light');
    };

    darkQuery.addEventListener('change', updatePreferredTheme);
  }
};
