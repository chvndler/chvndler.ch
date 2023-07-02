export interface InteractionsGalleryProps {
  url: string;
  target?: string;
  type: string;
  title: string;
  content: string;
}

const arch001: InteractionsGalleryProps = {
  url: '/interact',
  target: '_self',
  type: 'Interactions',
  title: 'interactions',
  content: 'implementing interfaces and interactions',
};

const arch002: InteractionsGalleryProps = {
  url: '/media',
  target: '_self',
  type: 'Motion',
  title: 'media',
  content: 'visual desing and communication',
};

const arch003: InteractionsGalleryProps = {
  url: '/projects',
  target: '_self',
  type: 'Internet Projects',
  title: 'internet projects',
  content: 'various internet projects, libraries and experiments',
};

export const interactionTypes: Record<string, InteractionsGalleryProps> = {
  arch001,
  arch002,
  arch003,
};

export const interactions = Object.values(interactionTypes);
