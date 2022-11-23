import { FixedCanvas } from '@/components/ds';
import { AlternateFooter } from '@/components/layout/app-footer/alternate-footer';
import { AtlrNavbar } from '@/components/layout/atlr.navbar';
import { MuxVideoObject } from '@/components/primitives/mux-video';

const TestPage = () => {
  return (
    <>
      <AtlrNavbar />
      <FixedCanvas>
        <MuxVideoObject />
      </FixedCanvas>

      <AlternateFooter />
    </>
  );
};

export default TestPage;
