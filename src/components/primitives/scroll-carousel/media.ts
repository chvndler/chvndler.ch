import media2 from '@/public/images/cover.jpg';
import media1 from '@/public/og.png';

export const media = [media1, media2];
export const mediaByIndex = (index: number) => media[index % media.length];
