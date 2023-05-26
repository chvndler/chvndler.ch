function generateColors(): string[] {
  const colors: string[] = [];
  for (let i = 0; i < 5; i++) {
    const color = Math.floor(Math.random() * 16777215)
      .toString(16)
      .toUpperCase();
    colors.push(color.padStart(6, '0'));
  }
  return colors;
}

const matchColors = generateColors();

const useColorGenerator = (name: string, colors: string[]) => {
  const url = `https://source.boringavatars.com/marble/38/${name}?colors=${colors}`;
  return url;
};

export { useColorGenerator, matchColors };
