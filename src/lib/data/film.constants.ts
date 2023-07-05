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

const film002: MuxVideoProperties = {
  name: 'Alone with the Gods.',
  title: 'alone with the Gods.',
  id: 'DLIx3q00lvWHvER8pO00wJQCxdk7xyzJ43aAVPqJe3BZ00',
  poster: `${urlPosterPrefix}alone3.jpg`,
  url: '',
};

const film003: MuxVideoProperties = {
  name: 'Aquaman ft. Chris Buxton - Pharro (Official Music Video)',
  title: 'aquaman. (official music video)',
  id: 'Lr2BtEpVee015QBnDGPJzGuXfxBlujKXp9Q3mkkRYnEo',
  poster: `${urlPosterPrefix}aqua2.jpg`,
  url: '',
};

const film004: MuxVideoProperties = {
  name: 'Forever Indebted.',
  title: 'forever indebted.',
  id: 'v3dRmogDKN1R4Oq00OlCRvSvY019MvaNmCiyPdgbTq800s',
  poster: `${urlPosterPrefix}forever1.png`,
  url: '',
};

const film005: MuxVideoProperties = {
  name: 'atleast i told the truth.',
  title: 'atleast i told the truth.',
  id: 'AgJIkK2RpFPQ183up02vQjizlfTcQeV2Tv8RXFvNpWQo',
  poster: `${urlPosterPrefix}v2-truth.jpg`,
  url: '',
};

export const filmTypes: Record<string, MuxVideoProperties> = {
  film001,
  film002,
  film003,
  film004,
  film005,
};

export const films = Object.values(filmTypes);

/*
  {
    title: 'alone with the Gods.',
    id: 'DLIx3q00lvWHvER8pO00wJQCxdk7xyzJ43aAVPqJe3BZ00',
    poster: 'https://cdn.chvndler.ch/assets/img/alone3.jpg',
    name: 'Alone with the Gods.',
  },
  {
    title: 'aquaman. (official music video)',
    id: 'Lr2BtEpVee015QBnDGPJzGuXfxBlujKXp9Q3mkkRYnEo',
    poster: 'https://cdn.chvndler.ch/assets/img/aqua2.jpg',
    name: 'Aquaman ft. Chris Buxton - Pharro (Official Music Video)',
  },
  {
    title: 'forever indebted.',
    id: 'v3dRmogDKN1R4Oq00OlCRvSvY019MvaNmCiyPdgbTq800s',
    poster: 'https://cdn.chvndler.ch/assets/img/forever1.png',
    name: 'Forever Indebted.',
  },
  {
    title: 'atleast i told the truth.',
    id: 'AgJIkK2RpFPQ183up02vQjizlfTcQeV2Tv8RXFvNpWQo',
    poster: 'https://cdn.chvndler.ch/assets/img/v2-truth.jpg',
    name: 'atleast i told the truth.',
  },
*/
