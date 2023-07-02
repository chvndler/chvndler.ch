
const urlPosterPrefix = 'https://cdn.chvndler.ch/assets/img/';

export interface MuxVideoProperties {
  name?: string;
  title: string;
  id: string;
  poster?: string;
  url?: string;
}

const film001: MuxVideoProperties = {
  name: '2019 Film Reel.',
  title: '(nineteen) film reel.',
  id: 'QIknhH4mVuQiVYZdaObY4gFZOGSxJOCKTSwu02JemdAs',
  poster: `${urlPosterPrefix}reel.jpg`,
  url: '',
};

export const filmTypes: Record<string, MuxVideoProperties> = {
  film001,
};

export const films = Object.values(filmTypes);
