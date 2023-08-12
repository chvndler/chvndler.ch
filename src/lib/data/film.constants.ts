import { type MuxVideoProperties } from './types';

const urlPosterPrefix = 'https://cdn.chvndler.ch/assets/img/';
const thumbnailPrefix = 'https://image.mux.com/';

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

const film006: MuxVideoProperties = {
  name: 'days of truth.',
  title: 'days of truth.',
  id: 'fv00fLo01KSmZPEm9GPmrSijBtVgFdPqOy9y00hS6gg5uw',
  poster: `${urlPosterPrefix}dot-summer.jpg`,
  url: '',
};

const film007: MuxVideoProperties = {
  name: 'champions® gymnastics',
  title: 'champions® gymnastics',
  id: 'OeaRWaw3MMWE8x6qPvaL9zvr02vRpwu1ffh6e2gF4qBY',
  poster: `${thumbnailPrefix}OeaRWaw3MMWE8x6qPvaL9zvr02vRpwu1ffh6e2gF4qBY/thumbnail.png?width=1920&height=1080&time=01`,
  url: '',
};

const film008: MuxVideoProperties = {
  name: 'Justin and Lauren.',
  title: 'Justin and Lauren.',
  id: '5LJXqmhDhExmOHFrwTa1lDQv0125boZxbCxLMMMhv8ac',
  poster: `${urlPosterPrefix}justin-lauren.jpg`,
  url: '',
};

const film009: MuxVideoProperties = {
  name: 'trufest.',
  title: 'trufest.',
  id: 'vGv02ap2HXSMaCGUwaSzDarW00N3ZRs48kE7y012FlGG2Y',
  poster: `${urlPosterPrefix}misc.jpg`,
  url: '',
};

const film010: MuxVideoProperties = {
  name: 'road to 400.',
  title: 'road to 400.',
  id: '1O9NitmAaQkZDHVCjPXsxM5zKCPhixPTzDgoQBJCmhw',
  poster: `${thumbnailPrefix}1O9NitmAaQkZDHVCjPXsxM5zKCPhixPTzDgoQBJCmhw/thumbnail.png?width=214&height=121&time=29&fit_mode=smartcrop`,
  url: '',
};

const film011: MuxVideoProperties = {
  name: 'wolves in vancouver.',
  title: 'wolves in vancouver.',
  id: 'hoT6g1iK4ypoiCEvCyvi5tDq201J2Ff8OHkp4lndz25Q',
  poster: `${urlPosterPrefix}2019.jpg`,
  url: '',
};

const film012: MuxVideoProperties = {
  name: 'pharro: fill my cup up.',
  title: 'pharro: fill my cup up.',
  id: 'vGDpLoXU4gbyNPQlHK5S7jWEFbIVej75YYuT012wdStM',
  poster: `${urlPosterPrefix}aqua.jpg`,
  url: '',
};

const film013: MuxVideoProperties = {
  name: 'wrld',
  title: 'wrld',
  id: '2Hd1hfF01gokb92UomAsmJL3lAdmO0102JJp007kAq005xIQ',
  poster: `${urlPosterPrefix}aqua.jpg`,
  url: '',
};

export const filmTypes: Record<string, MuxVideoProperties> = {
  film001,
  film002,
  film003,
  film004,
  film005,
  film006,
  film007,
  film008,
  film009,
  film010,
  film011,
  film012,
};

export const films = Object.values(filmTypes);
