import { ViewportHeightBox } from 'next-real-viewport';

type VHProps = {
  children: React.ReactNode;
};

export const ViewportH = ({ children }: VHProps) => {
  return (
    <>
      <ViewportHeightBox>{children}</ViewportHeightBox>
    </>
  );
};
