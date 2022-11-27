import { VideoPlayer } from './video.player';
import { VideoPlayerGrid } from './video.player.grid';

/**
 *
 * @render - project grid component.
 *
 */

export const FilmProjects = () => {
  return (
    <VideoPlayerGrid>
      <VideoPlayer
        videoId={'1RLeJdsCMunRRJ81yLED8PEacwYsaxH01MtGYZQWTR6g'}
        posterId={'1RLeJdsCMunRRJ81yLED8PEacwYsaxH01MtGYZQWTR6g'}
        captionTitle={'©2019 Film Reel'}
        captionOther={'Small Legacy Description of film'}
      />
      <VideoPlayer
        videoId={'1RLeJdsCMunRRJ81yLED8PEacwYsaxH01MtGYZQWTR6g'}
        posterId={'1RLeJdsCMunRRJ81yLED8PEacwYsaxH01MtGYZQWTR6g'}
        captionTitle={'Music Video'}
        captionOther={'Young Pharro - "Aquaman"'}
      />
    </VideoPlayerGrid>
  );
};

FilmProjects.displayName = 'FilmProjectDisplay';
