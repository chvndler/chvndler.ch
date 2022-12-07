export const getExcerpt = (content: string) => {
  const firstParagraphs = content.split('\n\n').slice(0, 4);

  if (firstParagraphs[firstParagraphs.length - 1].startsWith('#')) firstParagraphs.pop();

  return firstParagraphs.join('\n\n');
};
