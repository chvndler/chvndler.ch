import { FixedCanvas } from '@/components/ds';
import { AlternateFooter } from '@/components/layout/app-footer/alternate-footer';
import { AtlrNavbar } from '@/components/layout/atlr.navbar';
import { MuxVideoPlayer } from '@/components/primitives/mux-video/mux-video';

const TestPage = () => {
  return (
    <>
      <AtlrNavbar />
      <FixedCanvas>
        <MuxVideoPlayer />
      </FixedCanvas>

      <AlternateFooter />
    </>
  );
};

export default TestPage;
